import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyDtFSb6Y6oLmEmF33s-eKjok158REglyu8",
    authDomain: "riosdesanidad.firebaseapp.com",
    projectId: "riosdesanidad",
    storageBucket: "riosdesanidad.firebasestorage.app",
    messagingSenderId: "97497718412",
    appId: "1:97497718412:web:938e9211f96b081f6ee5a9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Verificación de sesión
onAuthStateChanged(auth, (user) => {
    if (!user && !window.location.href.includes('login.html')) {
        window.location.href = 'login.html';
    }
});

// Botón Salir
document.getElementById('btnLogout')?.addEventListener('click', () => {
    signOut(auth).then(() => window.location.href = 'login.html');
});

// Carga de Equipo
const gridCargos = document.getElementById('grid-cargos');
if (gridCargos) {
    const miembros = [
        { nombre: "Hno. Pedro Armas", cargo: "Director", mensaje: "Servicio fiel", foto: "img/director.jpg" },
        { nombre: "Hna. María Belén", cargo: "Tesorera", mensaje: "Fidelidad", foto: "img/tesorera.jpg" }
    ];
    miembros.forEach(m => {
        gridCargos.innerHTML += `<div class="admin-card"><img src="${m.foto}" onerror="this.src='https://via.placeholder.com/100'"><h3>${m.nombre}</h3><p>${m.cargo}</p></div>`;
    });
}

// Lógica de Galería Zoom
const modal = document.getElementById('modal-galeria');
const imgGrande = document.getElementById('img-grande');
document.addEventListener('click', (e) => {
    if (e.target.closest('.photo-item img')) {
        modal.classList.add('activo');
        imgGrande.src = e.target.src;
    } else if (modal?.classList.contains('activo')) {
        modal.classList.remove('activo');
    }
});
