import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { SobreComponent } from './componentes/sobre/sobre.component';
import { NotfoundComponent } from './componentes/notfound/notfound.component';

export const routes: Routes = [
    {path: ''               , component: HomeComponent                          },
    {path: 'sobre'          , component: SobreComponent                         },
    {path: 'cadastro'       , component: CadastroComponent                      },
    {path: 'naoencontrado'  , component: NotfoundComponent                      },
    {path: '**'             , redirectTo: 'naoencontrado',    pathMatch:'full'  }

];
