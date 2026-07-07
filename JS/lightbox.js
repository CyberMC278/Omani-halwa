const imageOverlay = document.getElementById('image-overlay');
const enlargedImg = document.getElementById('enlarged-img');
const overlayTitle = document.getElementById('overlay-title');
const overlayDesc = document.getElementById('overlay-desc');
const closeOverlayBtn = document.getElementById('close-overlay');

function openLightbox(imageSrc, title = '', desc = '') {
    // التحقق من وجود مسار صالح للصورة لتجنب ظهور أيقونة "الصورة المكسورة"
    if (!imageSrc) return; 

    enlargedImg.src = imageSrc;
    overlayTitle.innerText = title;
    overlayDesc.innerText = desc;
    imageOverlay.classList.add('active'); 
}

const cardImages = document.querySelectorAll('.types-card-img');
cardImages.forEach(item => {
    item.addEventListener('click', function() {
        const parentCard = this.closest('.types-card');
        const titleText = parentCard.querySelector('.types-card-title') ? parentCard.querySelector('.types-card-title').innerText : '';
        const descText = parentCard.querySelector('.types-card-desc') ? parentCard.querySelector('.types-card-desc').innerText : '';
        
        // التحقق: إذا كان العنصر نفسه هو صورة نأخذ مسارها، وإلا نبحث عن أول صورة بداخله
        const imgElement = this.tagName.toLowerCase() === 'img' ? this : this.querySelector('img');
        const imageSrc = imgElement ? imgElement.src : '';
        
        openLightbox(imageSrc, titleText, descText);
    });
});

const definitionImage = document.querySelector('.definition-image');
if (definitionImage) {
    definitionImage.addEventListener('click', function() {
        const imgElement = this.tagName.toLowerCase() === 'img' ? this : this.querySelector('img');
        const imageSrc = imgElement ? imgElement.src : '';
        openLightbox(imageSrc); 
    });
}

const sectionImages = document.querySelector('.fame-image');
if (sectionImages) {
    sectionImages.addEventListener('click', function() {
        const imgElement = this.tagName.toLowerCase() === 'img' ? this : this.querySelector('img');
        const imageSrc = imgElement ? imgElement.src : '';
        openLightbox(imageSrc);
    });
}

if (closeOverlayBtn) {
    closeOverlayBtn.addEventListener('click', function() {
        imageOverlay.classList.remove('active');
    });
}

if (imageOverlay) {
    imageOverlay.addEventListener('click', function(e) {
        if (e.target === this || e.target.classList.contains('overlay-content-wrapper')) {
            imageOverlay.classList.remove('active');
        }
    });
}