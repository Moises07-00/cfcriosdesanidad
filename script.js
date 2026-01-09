document.addEventListener('DOMContentLoaded', () => {

    /* =====================================================
       1. PÁGINA INICIO: EQUIPO EBDV
       ===================================================== */
    const gridCargos = document.getElementById('grid-cargos');
    
    if (gridCargos) {
        const miembros = [
            { nombre: "Hna. Brillet Pérez", cargo: "Directora General", mensaje: "Comprometidos con la enseñanza bíblica.", foto: "brilletperez.jpg" },
            { nombre: "Hna. Darinde Medina", cargo: "Directora de Programa", mensaje: "Administrando con fidelidad.", foto: "img/miembros/tesorero.jpg" },
            { nombre: "Hno. Moisés Canepa", cargo: "Multimedia / Publicidad", mensaje: "Llevando el evangelio a las naciones.", foto: "img/miembros/multimedia.jpg" },
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
            { titulo: "Servicio Fin de Año", fecha: "Diciembre 2025", fotos: Array(15).fill("https://via.placeholder.com/300x200?text=Campaña") },
            { titulo: "Servicio Navideño", fecha: "Diciembre 2025", fotos: Array(15).fill("https://via.placeholder.com/300x200?text=Aniversario") },
            { titulo: "EBDV 2025", fecha: "Julio 2025", fotos: Array(15).fill("https://via.placeholder.com/300x200?text=EBDV") },
            { titulo: "Vigilia Unida", fecha: "Mayo 2025", fotos: Array(15).fill("https://via.placeholder.com/300x200?text=Vigilia") },
            { titulo: "Día de la Familia", fecha: "Marzo 2025", fotos: Array(15).fill("https://via.placeholder.com/300x200?text=Familia") }
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