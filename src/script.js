  // JavaScript to change navbar background on scroll
  window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-bg-transparent', 'block');
    } else {
        navbar.classList.remove('navbar-bg-transparent', 'block');
    }
});
document.addEventListener('DOMContentLoaded', function() {
const text = "Style With Instyng"; // Teks yang akan ditampilkan
const typingDelay = 50; // Jeda antara pengetikan karakter (dalam milidetik)
const cursorBlinkSpeed = 500; // Kecepatan kedipan kursor (dalam milidetik)

let index = 0;
const typingTextElement = document.getElementById('typing-text');
const typingCursorElement = document.getElementById('typing-cursor');

function type() {
    if (index < text.length) {
        typingTextElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, typingDelay);
    } else {
        // Hentikan animasi kursor
        typingCursorElement.style.display = 'none';
        // Jeda sebelum memulai ulang
        setTimeout(reset, 2000);
    }
}

function reset() {
    // Hapus teks yang telah ditambahkan
    typingTextElement.textContent = "Style With ";
    // Reset indeks karakter untuk mengulangi animasi ketikan
    index = 0;
    // Mulai kembali animasi ketik
    setTimeout(type, typingDelay);
    // Tampilkan kembali kursor
    typingCursorElement.style.display = 'inline';
}

// Mulai animasi ketik
setTimeout(type, typingDelay);

// Animasi kedipan kursor
setInterval(() => {
    typingCursorElement.style.display = (typingCursorElement.style.display === 'none') ? 'inline' : 'none';
}, cursorBlinkSpeed);
});

document.addEventListener('DOMContentLoaded', function() {
const slider = document.getElementById('benefits-slider');
const slides = slider.children;
const totalSlides = slides.length;
let index = 0;

function showNextSlide() {
    index = (index + 1) % totalSlides;
    slider.style.transform = `translateX(-${index * 100}%)`;
}

setInterval(showNextSlide, 3000);
});

// Slot Machine effects
document.addEventListener('DOMContentLoaded', function () {
const projectNumber = document.getElementById('project-number');
const targetNumber = 800; // Angka target yang akan ditampilkan

// Fungsi untuk menghasilkan angka acak dalam rentang tertentu
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Fungsi untuk melakukan animasi slot machine
function animateNumber() {
    let currentNumber = 0;
    const animationDuration = 2000; // Durasi animasi dalam milidetik
    const animationInterval = 50; // Interval antara setiap perubahan angka dalam animasi

    const interval = setInterval(() => {
        currentNumber = getRandomNumber(currentNumber, targetNumber); // Menetapkan angka acak sebagai nilai saat ini
        projectNumber.textContent = currentNumber; // Menampilkan angka saat ini pada elemen HTML

        if (currentNumber >= targetNumber) {
            projectNumber.textContent = targetNumber; // Memastikan angka akhir yang ditampilkan adalah angka target
            clearInterval(interval); // Menghentikan interval jika angka target tercapai
        }
    }, animationInterval);
}

// Memanggil fungsi animasi saat konten dimuat
animateNumber();
});

// animasi ketika di scroll bagian about
document.addEventListener('DOMContentLoaded', function() {
    const fadeInElements = document.querySelectorAll('.fade-in');

    function checkFadeIn() {
        fadeInElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;

            // Tampilkan elemen ketika berada di tengah layar
            if (elementTop < window.innerHeight / 1.2 && elementBottom >= 0) {
                element.classList.add('active');
            }
        });
    }

    // Jalankan cek animasi saat konten dimuat dan saat di-scroll
    checkFadeIn();
    window.addEventListener('scroll', checkFadeIn);
});


// Ambil semua tombol detail
const detailButtons = document.querySelectorAll('.btn-detail');

// Tambahkan event listener untuk setiap tombol detail
detailButtons.forEach(button => {
button.addEventListener('click', () => {
// Tampilkan popup
const popup = document.getElementById('popupAll');
popup.style.display = 'flex';
});
});

// Ambil tombol close
const closeButton = document.querySelector('.btn-close');

// Tambahkan event listener untuk tombol close
closeButton.addEventListener('click', () => {
// Sembunyikan popup
const popup = document.getElementById('popupAll');
popup.style.display = 'none';
});


// navbar style
document.addEventListener("DOMContentLoaded", function () {
var navbar = document.getElementById("navbar");
var lastScrollTop = 0;
window.addEventListener("scroll", function () {
    var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScroll > lastScrollTop) {
        // Scroll down
        navbar.classList.remove("navbar-hidden");
    } else {
        // Scroll up
        navbar.classList.add("navbar-hidden");
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});
});



// animasi untuk card
document.addEventListener("DOMContentLoaded", function() {
window.addEventListener("scroll", function() {
const cards = document.querySelectorAll(".card");
cards.forEach(function(card, index) {
    if (isElementInViewport(card)) {
        setTimeout(function() {
            card.classList.add("animate");
        }, index * 200); // Delay setiap card untuk membuat animasi berurutan
    }
});
});

function isElementInViewport(el) {
const rect = el.getBoundingClientRect();
return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
);
}
});


// chatboot
document.addEventListener("DOMContentLoaded", function() {
    const chatbotButton = document.getElementById("chatbot-button");
    chatbotButton.addEventListener("click", function() {
      // Tambahkan kode untuk menampilkan popup chatbot di sini
      alert("Ini adalah popup chatbot.");
    });
  });



  document.querySelector('.btn-close').addEventListener('click', function() {
    document.getElementById('popupAll').style.display = 'none';
});


document.querySelectorAll('.btn-detail').forEach(button => {
    button.addEventListener('click', function() {
        const packageType = this.getAttribute('data-package');
        document.getElementById(`popup${packageType.charAt(0).toUpperCase() + packageType.slice(1)}`).classList.remove('hidden');
    });
});

document.querySelectorAll('.btn-close').forEach(button => {
    button.addEventListener('click', function() {
        this.closest('.popup-outer').classList.add('hidden');
    });
});




// Portfolio
const portfolioData = {
    logo: [
        { img: '../img/MustikaJayaT.png', desc: 'Logo Perusahaan Mustika Jaya Teknik' },
        { img: '../img/NatMobile.svg', desc: 'Logo Perusahaan Nat Mobile' },
        { img: '../img/logoM.jpg', desc: 'Logo perusahaan Meikarta' }
    ],
    makalah: [
        { img: 'path/to/makalah1.jpg', desc: 'Makalah untuk ABC Company' },
        { img: 'path/to/makalah2.jpg', desc: 'Makalah untuk XYZ Company' },
        { img: 'path/to/makalah3.jpg', desc: 'Makalah untuk LMN Company' }
    ],
    webdev: [
        { img: 'path/to/webdev1.jpg', desc: 'Website Dev untuk ABC Company' },
        { img: 'path/to/webdev2.jpg', desc: 'Website Dev untuk XYZ Company' },
        { img: 'path/to/webdev3.jpg', desc: 'Website Dev untuk LMN Company' }
    ],
    motiongraphic: [
        { img: 'path/to/motiongraphic1.jpg', desc: 'Motion Graphic untuk ABC Company' },
        { img: 'path/to/motiongraphic2.jpg', desc: 'Motion Graphic untuk XYZ Company' },
        { img: 'path/to/motiongraphic3.jpg', desc: 'Motion Graphic untuk LMN Company' }
    ]
};

function showPortfolio(category) {
    const portfolioItems = document.getElementById('portfolio-items');
    portfolioItems.innerHTML = '';

    portfolioData[category].forEach(item => {
        const card = document.createElement('div');
        card.className = 'bg-white rounded-lg shadow-md p-4';

        const img = document.createElement('img');
        img.src = item.img;
        img.alt = item.desc;
        img.className = 'w-full h-auto rounded-lg';

        const desc = document.createElement('p');
        desc.className = 'mt-4 text-gray-800 text-center';
        desc.textContent = item.desc;

        card.appendChild(img);
        card.appendChild(desc);
        portfolioItems.appendChild(card);
    });
}

// Show default category on page load
document.addEventListener('DOMContentLoaded', () => {
    showPortfolio('logo');
});



// toogle switch button

const toggleCheckbox = document.getElementById('dark-mode-toggle');
    const htmlElement = document.documentElement;

    toggleCheckbox.addEventListener('change', () => {
      if (toggleCheckbox.checked) {
        htmlElement.classList.add('dark');
      } else {
        htmlElement.classList.remove('dark');
      }
    });




    // 3D models
    // Create a scene
    const scene = new THREE.Scene();

    // Create a camera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // Create a WebGL renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Append renderer to the container
    document.getElementById('canvas-container').appendChild(renderer.domElement);

    // Create a loader
    const loader = new THREE.GLTFLoader();

    // Load a GLTF model
    loader.load(
        // URL of the model
        '../3D/scane.gltf',

        // onLoad callback
        function (gltf) {
            // Get the loaded model
            const model = gltf.scene;

            // Add the model to the scene
            scene.add(model);
        },

        // onProgress callback
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },

        // onError callback
        function (error) {
            console.error('Error loading model: ', error);
        }
    );

    // Function to rotate the model based on scroll
    function rotateOnScroll() {
        // Calculate rotation angle based on scroll position
        const angle = window.scrollY * 0.01;

        // Rotate the model
        // Assuming the model is a single mesh
        if (scene.children.length > 0) {
            const model = scene.children[0];
            model.rotation.x = angle;
            model.rotation.y = angle;
        }
    }

    // Add event listener for scroll
    window.addEventListener('scroll', rotateOnScroll);

    // Render the scene
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }
    animate();

