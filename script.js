document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('postulacionForm');
    const fotoInput = document.getElementById('foto');
    const preview = document.getElementById('preview');
    const postulacionesList = document.getElementById('postulaciones-list');
    const submitBtn = document.getElementById('submitBtn');
    const loaderOverlay = document.getElementById('loaderOverlay');
    const successMessage = document.getElementById('successMessage');

    // Vista previa de la foto
    fotoInput.addEventListener('change', function (e) {
        if (e.target.files && e.target.files[0]) {
            const reader = new FileReader();
            reader.onload = function (ev) {
                preview.src = ev.target.result;
                preview.style.display = 'block';
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    });

    // Cargar postulaciones guardadas
    cargarPostulaciones();

    // Enviar formulario
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        if (!preview.src) {
            alert('Por favor, seleccione una foto de perfil.');
            return;
        }

        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';
        loaderOverlay.classList.add('active');

        setTimeout(() => {
            loaderOverlay.classList.remove('active');

            const nombre = document.getElementById('nombre').value.trim();
            const telefono = document.getElementById('telefono').value.trim();
            const cargo = document.getElementById('cargo').value;
            const motivo = document.getElementById('motivo').value.trim();
            const foto = preview.src;

            const postulacion = {
                id: Date.now(),
                foto,
                nombre,
                telefono,
                cargo,
                motivo,
                fecha: new Date().toLocaleDateString('es-ES')
            };

            let postulaciones = JSON.parse(localStorage.getItem('postulaciones') || '[]');
            postulaciones.push(postulacion);
            localStorage.setItem('postulaciones', JSON.stringify(postulaciones));

            agregarPostulacionCard(postulacion);

            successMessage.classList.add('active');
            setTimeout(() => {
                successMessage.classList.remove('active');
            }, 4000);

            form.reset();
            preview.src = '';
            preview.style.display = 'none';

            submitBtn.disabled = false;
            submitBtn.textContent = 'Enviar Postulación';
        }, 5000);
    });

    function agregarPostulacionCard(postulacion) {
        const card = document.createElement('div');
        card.className = 'postulacion-card';
        card.innerHTML = `
            <img src="${postulacion.foto}" alt="Foto de ${postulacion.nombre}">
            <h3>${postulacion.nombre}</h3>
            <p><strong>Cargo:</strong> ${postulacion.cargo}</p>
            <p><strong>Motivo:</strong> ${postulacion.motivo}</p>
            <p><em>Fecha: ${postulacion.fecha}</em></p>
        `;
        postulacionesList.prepend(card);
    }

    function cargarPostulaciones() {
        const postulaciones = JSON.parse(localStorage.getItem('postulaciones') || '[]');
        postulaciones.reverse().forEach(postulacion => {
            agregarPostulacionCard(postulacion);
        });
    }

    // Resaltar enlace activo al hacer scroll
    window.addEventListener('scroll', () => {
        const sections = ['inicio', 'galeria', 'eventos'];
        const scrollPos = window.scrollY + 100;

        sections.forEach(sec => {
            const section = document.getElementById(sec);
            if (section && section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
                document.querySelector('.nav-link.active')?.classList.remove('active');
                document.querySelector(`a[href="#${sec}"]`)?.classList.add('active');
            }
        });
    });
});