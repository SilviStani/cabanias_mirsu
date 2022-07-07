import React from 'react'

const Video = () => {
  return (
    <div className={styles.container}> 
        <iframe 
            src="https://player.vimeo.com/video/726725210?h=223d8eeddf&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" 
            width="920" 
            height="518" 
            frameBorder="0" 
            autoPlay
            allow="autoplay; fullscreen; picture-in-picture" 
            allowFullScreen 
            title="cabanas_mirsu"
        />
    </div>
  )
}

export default Video;