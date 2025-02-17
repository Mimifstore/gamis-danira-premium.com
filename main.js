// let index = 0;
//         const slides = document.querySelectorAll('.carousel img');

//         function showSlide(n) {
//             slides.forEach((slide, i) => {
//                 slide.classList.remove('active');
//                 if (i === n) {
//                     slide.classList.add('active');
//                 }
//             });
//         }
//         function nextSlide() {
//             index = (index + 1) % slides.length;
//             showSlide(index);
//         }
//         function prevSlide() {
//             index = (index - 1 + slides.length) % slides.length;
//             showSlide(index);
//         }

// let index = 0;
//         const images = document.querySelectorAll(".carousel img");
//         function showNextImage() {
//             images[index].classList.remove("active");
//             index = (index + 1) % images.length;
//             images[index].classList.add("active");
//         }
//         setInterval(showNextImage, 3000);

let index = 0;
        function slide() {
            const carouselInner = document.querySelector('.carousel-inner');
            const images = document.querySelectorAll('.carousel img');
            index = (index + 1) % images.length;
            carouselInner.style.transform = `translateX(-${index * 100}%)`;
        }
        setInterval(slide, 3000);

        // api key alamat//

        async function fetchAPI(url) {
            const response = await fetch(url);
            return response.json();
        }

        async function loadProvinsi() {
            const data = await fetchAPI('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json');
            let select = document.getElementById("provinsi");
            data.forEach(prov => {
                let option = document.createElement("option");
                option.value = prov.id;
                option.text = prov.name;
                select.appendChild(option);
            });
        }

        async function loadKota() {
            let provinsiID = document.getElementById("provinsi").value;
            let select = document.getElementById("kota");
            select.innerHTML = '<option value="">Pilih Kota/Kabupaten</option>';
            let data = await fetchAPI(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinsiID}.json`);
            data.forEach(kota => {
                let option = document.createElement("option");
                option.value = kota.id;
                option.text = kota.name;
                select.appendChild(option);
            });
        }

        async function loadKecamatan() {
            let kotaID = document.getElementById("kota").value;
            let select = document.getElementById("kecamatan");
            select.innerHTML = '<option value="">Pilih Kecamatan</option>';
            let data = await fetchAPI(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${kotaID}.json`);
            data.forEach(kec => {
                let option = document.createElement("option");
                option.value = kec.id;
                option.text = kec.name;
                select.appendChild(option);
            });
        }

        loadProvinsi();
       
        // kirim pesan wa //

        function kirimPesanan() {
            let nama = document.getElementById("nama").value;
            let telepon = document.getElementById("telepon").value;
            let alamat = document.getElementById("alamat").value;
            let provinsi = document.getElementById("provinsi").options[document.getElementById("provinsi").selectedIndex].text;
            let kota = document.getElementById("kota").options[document.getElementById("kota").selectedIndex].text;
            let kecamatan = document.getElementById("kecamatan").options[document.getElementById("kecamatan").selectedIndex].text;
            let warna = document.getElementById("warna").value;
            let ukuran = document.getElementById("ukuran").value;
            
            let pesan = `Halo, saya ingin memesan Gamis Danira Premium:\n\n` +
                `Nama: ${nama}\n` +
                `Nomor WA: ${telepon}\n` +
                `Alamat: ${alamat}, ${kecamatan}, ${kota}, ${provinsi}\n` +
                `Warna: ${warna}\n` +
                `Ukuran: ${ukuran}\n` +
                `catatan:\n\n` + 
                `tolong di proses ya kak`;
            
            let whatsappURL = `https://wa.me/628988166105?text=${encodeURIComponent(pesan)}`;
            window.open(whatsappURL, '_blank');
        }

(function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)})(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '601816316053339'); 
fbq('track', 'PageView');


       
        
