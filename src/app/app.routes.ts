import { Routes } from '@angular/router';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { HomeComponent } from './pages/home/home.component';
import { MusicasComponent } from './pages/musicas/musicas.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'usuarios', component: UsuariosComponent },
    { path: 'musicas', component: MusicasComponent},
];
