import GSAP from 'gsap'

export function up() {
    GSAP.to('.up', {
        y: 0,
        opacity: 1,
        duration: 0.3,
    })
}