<script>
let video = document.getElementById('video_stellarium');
video.addEventListener('mouseover', ()=>{
  video.play();
});
video.addEventListener('mouseout', ()=>{
  video.pause();
});

</script>