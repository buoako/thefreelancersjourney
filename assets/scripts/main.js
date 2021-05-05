/*
  x wait for the DOMContentLoaded event
  x on DOMContentLoaded
      look for blob buttons
      attach click handler to button

  on blob button clicked
    alert hello
*/

document.addEventListener('DOMContentLoaded', () => {
    const blobs = document.querySelectorAll('.blob');
    blobs.forEach(applyBlobBehavior);

    const closes = document.querySelectorAll('.close');
    closes.forEach(applyCloseBehavior);
});

const applyBlobBehavior = (blob) => {
    blob.addEventListener('click', () => {
        const selector = blob.dataset.overlay;
        const overlay = document.querySelector(selector);
        overlay.classList.remove('is-hidden');
    });
};

const applyCloseBehavior = (close) => {
    close.addEventListener('click', () =>{
        const overlay = close.closest('.overlay');
        overlay.classList.add('is-hidden');
    })
}
