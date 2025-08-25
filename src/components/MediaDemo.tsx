import React from 'react';

const publicAsset = (relativePath: string) =>
  `${import.meta.env.BASE_URL}${relativePath.replace(/^\//, '')}`;

const imageFromSrc = new URL('../assets/example.png', import.meta.url).href;
const videoFromSrc = new URL('../assets/hero.mp4', import.meta.url).href;

const imageFromPublic = publicAsset('worldlink.png');
const videoFromPublic = publicAsset('hero.mp4');

export default function MediaDemo() {
  return (
    <div style={{ display: 'grid', gap: 16 }}>
      <section>
        <h3>Image from src/assets</h3>
        <img src={imageFromSrc} alt="From src/assets" width={320} />
      </section>

      <section>
        <h3>Image from public</h3>
        <img src={imageFromPublic} alt="From public" width={320} />
      </section>

      <section>
        <h3>Video from src/assets</h3>
        <video src={videoFromSrc} controls width={480} />
      </section>

      <section>
        <h3>Video from public</h3>
        <video controls width={480}>
          <source src={videoFromPublic} type="video/mp4" />
        </video>
      </section>
    </div>
  );
}


