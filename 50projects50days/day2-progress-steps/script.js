const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
  currentActive++

  if (currentActive > circles.length) {
    currentActive = circles.length
  }

  update()
})

prev.addEventListener('click', () => {
  currentActive--

  if (currentActive < 1) {
    currentActive = 1
  }

  update()
})

function update () {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.remove("border-slate-300")
      if (!circle.classList.contains("border-blue-500")) circle.classList.add("border-blue-500")
    } else {
      circle.classList.remove("border-blue-500")
      circle.classList.add("border-slate-300")
    }
  })

  const actives = document.querySelectorAll(".border-blue-500")

  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

  prev.disabled = currentActive === 1
  next.disabled = currentActive === circles.length
}