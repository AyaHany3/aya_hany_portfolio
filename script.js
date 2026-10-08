function toggleMenu(){
  document.getElementById('mobileMenu').classList.toggle('open');
}
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',()=>{
    document.getElementById('mobileMenu')?.classList.remove('open');
  });
});
