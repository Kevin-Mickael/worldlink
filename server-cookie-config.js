// Configuration serveur pour les cookies httpOnly sécurisés
// À intégrer dans votre serveur backend (Node.js/Express, PHP, etc.)

// Exemple pour Node.js/Express
const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// Configuration des cookies sécurisés
const cookieOptions = {
  httpOnly: true,           // Empêche l'accès via JavaScript côté client
  secure: true,             // Cookies uniquement via HTTPS
  sameSite: 'strict',       // Protection CSRF
  maxAge: 365 * 24 * 60 * 60 * 1000, // 1 an
  path: '/',                // Disponible sur tout le site
  domain: process.env.NODE_ENV === 'production' ? '.worldlink.mu' : 'localhost'
};

// Middleware pour parser les cookies
app.use(cookieParser());

// Route pour définir les préférences de cookies
app.post('/api/cookies/preferences', (req, res) => {
  try {
    const { necessary, analytics, marketing, functional } = req.body;
    
    // Validation des données
    if (typeof necessary !== 'boolean' || necessary !== true) {
      return res.status(400).json({ error: 'Les cookies nécessaires sont obligatoires' });
    }
    
    // Définition des cookies sécurisés
    res.cookie('cookiesAccepted', 'true', cookieOptions);
    res.cookie('analyticsCookies', analytics.toString(), cookieOptions);
    res.cookie('marketingCookies', marketing.toString(), cookieOptions);
    res.cookie('functionalCookies', functional.toString(), cookieOptions);
    
    // Réponse de succès
    res.json({ 
      success: true, 
      message: 'Préférences de cookies enregistrées',
      preferences: { necessary, analytics, marketing, functional }
    });
    
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement des préférences:', error);
    res.status(500).json({ error: 'Erreur serveur interne' });
  }
});

// Route pour récupérer les préférences de cookies
app.get('/api/cookies/preferences', (req, res) => {
  try {
    const preferences = {
      necessary: req.cookies.cookiesAccepted === 'true',
      analytics: req.cookies.analyticsCookies === 'true',
      marketing: req.cookies.marketingCookies === 'true',
      functional: req.cookies.functionalCookies === 'true'
    };
    
    res.json({ preferences });
    
  } catch (error) {
    console.error('Erreur lors de la récupération des préférences:', error);
    res.status(500).json({ error: 'Erreur serveur interne' });
  }
});

// Route pour supprimer les cookies
app.delete('/api/cookies/preferences', (req, res) => {
  try {
    // Suppression des cookies
    res.clearCookie('cookiesAccepted', cookieOptions);
    res.clearCookie('analyticsCookies', cookieOptions);
    res.clearCookie('marketingCookies', cookieOptions);
    res.clearCookie('functionalCookies', cookieOptions);
    
    res.json({ success: true, message: 'Préférences de cookies supprimées' });
    
  } catch (error) {
    console.error('Erreur lors de la suppression des préférences:', error);
    res.status(500).json({ error: 'Erreur serveur interne' });
  }
});

// Exemple pour PHP
/*
<?php
// Configuration des cookies sécurisés en PHP
function setSecureCookie($name, $value, $days = 365) {
    $expires = time() + ($days * 24 * 60 * 60);
    
    $options = [
        'expires' => $expires,
        'path' => '/',
        'domain' => $_SERVER['HTTP_HOST'] === 'localhost' ? 'localhost' : '.worldlink.mu',
        'secure' => true,
        'httponly' => true,
        'samesite' => 'Strict'
    ];
    
    setcookie($name, $value, $options);
}

// Exemple d'utilisation
if ($_POST['action'] === 'savePreferences') {
    $necessary = $_POST['necessary'] === 'true';
    $analytics = $_POST['analytics'] === 'true';
    $marketing = $_POST['marketing'] === 'true';
    $functional = $_POST['functional'] === 'true';
    
    if ($necessary) {
        setSecureCookie('cookiesAccepted', 'true');
        setSecureCookie('analyticsCookies', $analytics ? 'true' : 'false');
        setSecureCookie('marketingCookies', $marketing ? 'true' : 'false');
        setSecureCookie('functionalCookies', $functional ? 'true' : 'false');
        
        echo json_encode(['success' => true]);
    } else {
        http_response_code(400);
        echo json_encode(['error' => 'Les cookies nécessaires sont obligatoires']);
    }
}
?>
*/

// Exemple pour Python/Flask
/*
from flask import Flask, request, jsonify, make_response
from datetime import datetime, timedelta

app = Flask(__name__)

def set_secure_cookie(response, name, value, days=365):
    expires = datetime.now() + timedelta(days=days)
    
    response.set_cookie(
        name, value,
        expires=expires,
        secure=True,
        httponly=True,
        samesite='Strict',
        path='/'
    )
    return response

@app.route('/api/cookies/preferences', methods=['POST'])
def save_cookie_preferences():
    try:
        data = request.get_json()
        necessary = data.get('necessary', False)
        analytics = data.get('analytics', False)
        marketing = data.get('marketing', False)
        functional = data.get('functional', False)
        
        if not necessary:
            return jsonify({'error': 'Les cookies nécessaires sont obligatoires'}), 400
        
        response = make_response(jsonify({'success': True}))
        response = set_secure_cookie(response, 'cookiesAccepted', 'true')
        response = set_secure_cookie(response, 'analyticsCookies', str(analytics).lower())
        response = set_secure_cookie(response, 'marketingCookies', str(marketing).lower())
        response = set_secure_cookie(response, 'functionalCookies', str(functional).lower())
        
        return response
        
    except Exception as e:
        return jsonify({'error': 'Erreur serveur interne'}), 500

if __name__ == '__main__':
    app.run(debug=True)
*/

module.exports = { cookieOptions };
