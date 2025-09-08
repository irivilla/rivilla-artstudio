import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Encargos } from './pages/encargos/encargos';
import { Invitaciones } from './pages/invitaciones/invitaciones';
import { LiveArt } from './pages/live-art/live-art';
import { Conocenos } from './pages/comun/conocenos/conocenos';
import { PoliticaCookies } from './pages/comun/politica-cookies/politica-cookies';
import { PoliticaPrivacidad } from './pages/comun/politica-privacidad/politica-privacidad';
import { PreguntasFrecuentes } from './pages/comun/preguntas-frecuentes/preguntas-frecuentes';

export const routes: Routes = [

    { path: 'home', component: Home },
    { path: 'live-art', component: LiveArt},
    { path: 'live-art/ilustracion',
        loadComponent: () => import('./pages/live-art/ilustracion/ilustracion').then(m => m.Ilustracion)
    },
    { path: 'live-art/cuadro',
        loadComponent: () => import('./pages/live-art/cuadro/cuadro').then(m => m.Cuadro)
    },
    { path: 'invitaciones', component: Invitaciones },
    { path: 'invitaciones/papel',
        loadComponent: () => import('./pages/invitaciones/papel/papel').then(m => m.Papel)
    },
    { path: 'invitaciones/web',
        loadComponent: () => import('./pages/invitaciones/web/web').then(m => m.Web)
    },
    { path: 'encargos', component: Encargos },
    { path: 'about', component: Conocenos },
    { path: 'politica-cookies', component: PoliticaCookies },
    { path: 'politica-privacidad', component: PoliticaPrivacidad },
    { path: 'preguntas-frecuentes', component: PreguntasFrecuentes },
    //ruta por defecto
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    //pagina por defecto de error
    { path: '**', component: Error }
    
];
