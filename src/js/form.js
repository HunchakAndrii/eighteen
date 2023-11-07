export default () => {
  console.log(1)

  const form = document.querySelector('.form')
  const formInput = document.querySelector('.form input')
  const formResult = document.querySelector('.form-result')

  form.addEventListener('submit', e => {
    e.preventDefault()
    // const formData = new FormData(form)

    if (formInput.value === 'City7gor@gmail.com') {
      form.style.display = 'none'
      formResult.style.display = 'block'
    }
  })
}
