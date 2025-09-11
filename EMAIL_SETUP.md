# Configuration Email - WorldLink Logistics

## Fonctionnalité
Cette application utilise une fonction serverless Cloudflare Pages pour envoyer des emails via l'API Brevo depuis le formulaire de contact.

## Configuration requise

### 1. Variables d'environnement dans Cloudflare Pages

Dans le dashboard Cloudflare Pages, ajoutez la variable d'environnement suivante :

```
BREVO_API_KEY = votre_clé_api_brevo
```

### 2. Configuration Brevo

1. Créez un compte sur [Brevo](https://www.brevo.com/)
2. Générez une clé API dans les paramètres de votre compte
3. Vérifiez le domaine d'expéditeur `noreply@worldlink.mu` dans Brevo
4. Ajoutez la clé API dans les variables d'environnement de Cloudflare Pages

### 3. Structure des fichiers

```
functions/
  api/
    send-email.ts    # Fonction serverless pour l'envoi d'emails
```

## Déploiement

### Développement local
```bash
npm run pages:dev
```

### Déploiement en production
```bash
npm run deploy
```

## Fonctionnalités

- ✅ Validation des données du formulaire
- ✅ Envoi d'emails HTML et texte
- ✅ Gestion des erreurs
- ✅ Support CORS
- ✅ Email de test configuré vers `Andriatsilavokevin@gmail.com`
- ✅ Template email professionnel avec le branding WorldLink

## Test

1. Remplissez le formulaire de contact
2. L'email sera envoyé à `Andriatsilavokevin@gmail.com`
3. Vérifiez les logs dans Cloudflare Pages pour le debugging

## Personnalisation

Pour changer l'email de destination, modifiez la ligne dans `functions/api/send-email.ts` :

```typescript
to: [
  {
    email: 'votre-email@example.com', // Changez ici
    name: 'Votre Nom'
  }
],
```

## Support

En cas de problème, vérifiez :
1. La clé API Brevo est correctement configurée
2. Le domaine d'expéditeur est vérifié dans Brevo
3. Les logs de la fonction dans Cloudflare Pages
