import React, { useState } from 'react';
import VideoHero from './VideoHero';

const VideoTest: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-8">Test de Fluidité Vidéo</h1>
        
        <button
          onClick={() => setShowVideo(!showVideo)}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg mb-8 transition-colors"
        >
          {showVideo ? 'Masquer' : 'Afficher'} la Vidéo
        </button>
        
        {showVideo && (
          <div className="relative h-96 w-full overflow-hidden rounded-lg">
            <VideoHero
              videoSrc="/worldlink/hero.mp4"
              posterSrc="/worldlink/worldlink.png"
              alt="Test vidéo"
              className="w-full h-full"
              onVideoReady={() => console.log('Vidéo prête')}
              onVideoError={() => console.log('Erreur vidéo')}
            />
          </div>
        )}
        
        <div className="mt-8 text-white">
          <h2 className="text-xl font-semibold mb-4">Instructions de test :</h2>
          <ul className="space-y-2 text-gray-300">
            <li>• Cliquez sur "Afficher la Vidéo" pour tester</li>
            <li>• Observez la fluidité de la transition</li>
            <li>• Vérifiez qu'il n'y a pas de saccades</li>
            <li>• Testez sur différents navigateurs</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VideoTest;
