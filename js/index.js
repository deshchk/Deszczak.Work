// posts scrolling on view
const posts = document.querySelectorAll('.post-card')

const isInView = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const image = entry.target.querySelector('.post-image')
        entry.isIntersecting ? image.classList.add('visible') : image.classList.remove('visible')
    })
}, {threshold: 1})
            
posts.forEach(post => {
    isInView.observe(post)
})

// to the top button showing up on scrolling down
const topBtn = document.querySelector('#to-the-top')

// percent scrolled
window.addEventListener("scroll", () => {
    let scrollPercent = Math.round(window.scrollY / (document.body.offsetHeight - window.innerHeight) * 100)
    scrollPercent >= 30 ? topBtn.style.display = 'block' : topBtn.style.display = 'none'
});