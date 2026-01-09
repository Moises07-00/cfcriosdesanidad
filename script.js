document.addEventListener('DOMContentLoaded', () => {

    /* =====================================================
       1. PÁGINA INICIO: EQUIPO EBDV
       ===================================================== */
    const gridCargos = document.getElementById('grid-cargos');
    
    if (gridCargos) {
        const miembros = [
            { nombre: "Hna. Brillet Pérez", cargo: "Directora General", mensaje: "Comprometidos con la enseñanza bíblica.", foto: "brilletperez.jpg" },
            { nombre: "Hna. Darinde Medina", cargo: "Directora de Programa", mensaje: "Administrando con fidelidad.", foto: "img/miembros/tesorero.jpg" },
            { nombre: "Hno. Moisés Canepa", cargo: "Multimedia / Publicidad", mensaje: "Llevando el evangelio a las naciones.", foto: "moisescanepa.jpg" },
            { nombre: "Hna. Mariana Poot", cargo: "Tesorera", mensaje: "Adorando al Rey con excelencia.", foto: "img/miembros/coreografia.jpg" }
        ];

        miembros.forEach(miembro => {
            const card = document.createElement('div');
            card.className = 'admin-card';
            card.innerHTML = `
                <img src="${miembro.foto}" alt="${miembro.nombre}" onerror="this.src='https://via.placeholder.com/150'">
                <h3>${miembro.nombre}</h3>
                <p class="cargo">${miembro.cargo}</p>
                <p class="mensaje">"${miembro.mensaje}"</p>
            `;
            gridCargos.appendChild(card);
        });
    }

    /* =====================================================
       2. PÁGINA GALERÍA
       ===================================================== */
    const galleryContainer = document.getElementById('gallery-container');

    if (galleryContainer) {
        const eventosPasados = [
        
             {
                titulo: "Servicio Fin De Año",
                fecha: "28 Diciembre 2025",
                // Tus fotos reales deben estar en tu carpeta de imágenes
                fotos: [
                    "img/campana2025/foto1.jpg",
                    "img/campana2025/foto2.jpg",
                    "img/campana2025/pastor-predicando.jpg",
                    // ... hasta 15 fotos
                    "img/campana2025/foto15.jpg"
                ]
            },
            
            {
                titulo: "Servicio Navideño",
                fecha: "21 Diciembre 2025",
                // Tus fotos reales deben estar en tu carpeta de imágenes
                fotos: [
                    "img/servicio211225/01sn.jpg",
                    "img/servicio211225/02sn.jpg",
                    "img/servicio211225/03sn.jpg",
                    "img/servicio211225/04sn.jpg",
                    "img/servicio211225/05sn.jpg",
                    "img/servicio211225/06sn.jpg",
                    "img/servicio211225/07sn.jpg",
                    "img/servicio211225/08sn.jpg",
                    "img/servicio211225/09sn.jpg",
                    "img/servicio211225/10sn.jpg",
                    "img/servicio211225/11sn.jpg",
                    "img/servicio211225/12sn.jpg",
                    "img/servicio211225/13sn.jpg",
                    "img/servicio211225/14sn.jpg",
                    "img/servicio211225/15sn.jpg",
                    "img/servicio211225/16sn.jpg",
                    "img/servicio211225/17sn.jpg",
                    "img/servicio211225/18sn.jpg",
                    "img/servicio211225/19sn.jpg",
                    "img/servicio211225/20sn.jpg",
                    // ... hasta 20 fotos
                ]
            },
            
            {
                titulo: "Noche Mexicana",
                fecha: "14 Septiembre 2025",
                // Tus fotos reales deben estar en tu carpeta de imágenes
                fotos: [
                    "img/campana2025/foto1.jpg",
                    "img/campana2025/foto2.jpg",
                    "img/campana2025/pastor-predicando.jpg",
                    // ... hasta 15 fotos
                    "img/campana2025/foto15.jpg"
                ]
            },  
            
        ];

        eventosPasados.forEach(evento => {
            const albumSection = document.createElement('div');
            albumSection.className = 'album-section';
            
            const photoGrid = document.createElement('div');
            photoGrid.className = 'photo-grid';
            
            evento.fotos.forEach(fotoUrl => {
                photoGrid.innerHTML += `<div class="photo-item"><img src="${fotoUrl}" loading="lazy"></div>`;
            });

            albumSection.innerHTML = `
                <div class="album-header">
                    <h3 class="album-title">${evento.titulo}</h3>
                    <span class="album-date">${evento.fecha}</span>
                </div>
            `;
            albumSection.appendChild(photoGrid);
            galleryContainer.appendChild(albumSection);
        });
    }
    
    // --- LÓGICA PARA EL ZOOM DE IMÁGENES ---
		const modal = document.getElementById('modal-galeria');
		const imgGrande = document.getElementById('img-grande');
		
		// Escuchar clics en toda la página, pero actuar solo si es una imagen de la galería
		document.addEventListener('click', (e) => {
		    // Si el clic es en una imagen dentro de un .photo-item
		    if (e.target.closest('.photo-item img')) {
		        modal.classList.add('activo');
		        imgGrande.src = e.target.src; // Pasa la URL de la imagen pequeña a la grande
		    } 
		    // Si el clic es en el modal (fondo) o en el botón de cerrar, se cierra
		    else if (modal.classList.contains('activo')) {
		        modal.classList.remove('activo');
		    }
		});


    /* =====================================================
       3. PÁGINA EVENTOS
       ===================================================== */
    const upcomingContainer = document.getElementById('upcoming-events');
    const pastEventsContainer = document.getElementById('past-events');

    if (upcomingContainer && pastEventsContainer) {
        
        // DATOS: PRÓXIMOS 3 EVENTOS
        const proximos = [
            {
                nombre: "Aniversario de la Iglesia'",
                fecha: "01 de Febrero, 2026 - 18:00 hrs",
                lugar: "Iglesia Ríos de Sanidad",
                imagen: "https://via.placeholder.com/400x200/27ae60/ffffff?text=Congreso+Mujeres"
            },
            {
                nombre: "Cena de Parejas",
                fecha: "14 de Febrero, 2026 - 19:30 hrs",
                lugar: "Salón de Eventos",
                imagen: "https://via.placeholder.com/400x200/e74c3c/ffffff?text=Cena+Parejas"
            },
            {
                nombre: "Inicio Clases EBDV",
                fecha: "05 de Abril, 2026 - 09:00 hrs",
                lugar: "Aulas de Niños",
                imagen: "https://via.placeholder.com/400x200/f39c12/ffffff?text=Inicio+EBDV"
            }
        ];

        // DATOS: ÚLTIMOS 3 EVENTOS PASADOS
        const pasados = [
            {
                nombre: "Servicio de Año Nuevo",
                fecha: "28 de Diciembre, 2025",
                lugar: "Templo Central",
                imagen: "https://via.placeholder.com/400x200/95a5a6/ffffff?text=Año+Nuevo"
            },
            {
                nombre: "Servicio Navideño",
                fecha: "21 de Diciembre, 2025",
                lugar: "Comunidad Local",
                imagen: "https://via.placeholder.com/400x200/95a5a6/ffffff?text=Navidad"
            },
            {
                nombre: "Clausura Talleres de Música",
                fecha: "15 de Diciembre, 2025",
                lugar: "Auditorio Menor",
                imagen: "https://via.placeholder.com/400x200/95a5a6/ffffff?text=Música"
            }
        ];

        // FUNCIÓN PARA DIBUJAR TARJETAS DE EVENTO
        function renderEventos(lista, contenedor, esFuturo) {
            lista.forEach(ev => {
                const card = document.createElement('div');
                card.className = 'event-card';
                
                // Definimos estilo de la etiqueta fecha
                const badgeClass = esFuturo ? 'status-upcoming' : 'status-past';
                const badgeText = esFuturo ? 'Próximamente' : 'Finalizado';

                card.innerHTML = `
                    <img src="${ev.imagen}" alt="${ev.nombre}" class="event-image">
                    <div class="event-content">
                        <span class="event-date-badge ${badgeClass}">${badgeText}</span>
                        <h3 class="event-title">${ev.nombre}</h3>
                        <p class="event-info"><i class="far fa-calendar-alt"></i> ${ev.fecha}</p>
                        <p class="event-info"><i class="fas fa-map-marker-alt"></i> ${ev.lugar}</p>
                    </div>
                `;
                contenedor.appendChild(card);
            });
        }

        // Ejecutar renderizado
        renderEventos(proximos, upcomingContainer, true);
        renderEventos(pasados, pastEventsContainer, false);
    }
});