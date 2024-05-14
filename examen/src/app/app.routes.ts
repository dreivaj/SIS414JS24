import { Routes } from '@angular/router';
import { DatosGeneralesComponent } from './institucional/datos-generales/datos-generales.component';
import { Component, ViewChildren } from '@angular/core';
import { SituacionGeograficaComponent } from './institucional/situacion-geografica/situacion-geografica.component';
import { DirectaComponent } from './Contrataciones/directa/directa.component';
import { EstructuraOrganicaComponent } from './institucional/estructura-organica/estructura-organica.component';
import { PlantelEjecutivoComponent } from './institucional/plantel-ejecutivo/plantel-ejecutivo.component';
import path from 'path';
import { ConsultaExternaComponent } from './Servicios/consulta-externa/consulta-externa.component';
import { LaboratorioClinicoComponent } from './Servicios/laboratorio-clinico/laboratorio-clinico.component';
import { ImagenologiaComponent } from './Servicios/imagenologia/imagenologia.component';
import { EnfermeriaComponent } from './Servicios/enfermeria/enfermeria.component';
import { FarmaciaComponent } from './Servicios/farmacia/farmacia.component';
import { FisioterapiaComponent } from './Servicios/fisioterapia/fisioterapia.component';
import { EcografiaComponent } from './Servicios/ecografia/ecografia.component';
import { InternacionClinicaQuirurgicaComponent } from './Servicios/internacion-clinica-quirurgica/internacion-clinica-quirurgica.component';
import { AfiliacionesComponent } from './Servicios/afiliaciones/afiliaciones.component';
import { FichajeComponent } from './Servicios/fichaje/fichaje.component';
import { AdministrativoComponent } from './PersonalDeSalud/administrativo/administrativo.component';
import { MedicoComponent } from './PersonalDeSalud/medico/medico.component';
import { AnpeComponent } from './Contrataciones/anpe/anpe.component';
import { DirectorioComponent } from './institucional/directorio/directorio.component';
import { LicitacionPublicaComponent } from './Contrataciones/licitacion-publica/licitacion-publica.component';
import { MenorComponent } from './Contrataciones/menor/menor.component';
import { PorExepcionComponent } from './Contrataciones/por-exepcion/por-exepcion.component';
import { AcesoriaLegalComponent } from './Transparencia/acesoria-legal/acesoria-legal.component';
import { RecursosHumanosComponent } from './Transparencia/recursos-humanos/recursos-humanos.component';
import { AuditoriaComponent } from './Transparencia/auditoria/auditoria.component';
import { HistorialDeAvisosComponent } from './Transparencia/historial-de-avisos/historial-de-avisos.component';
import { MainComponent } from './home/main/main.component';

export const routes: Routes = [
    {
        
        path: '',
         children:[
        {
             path: '',
                component: MainComponent
         }
            ]
    },
    {

    path: 'institucional',
    children:[
        {
        path: 'datos_generales',
        component: DatosGeneralesComponent
    },
    {
        path: 'directorio',
        component: DirectorioComponent
    },
    {
        path: 'estructura_organica',
        component: EstructuraOrganicaComponent
    },
    {
        path: 'plantel_ejecutivo',
        component: PlantelEjecutivoComponent
    },
    {
        path:'situacion_geografica',
        component: SituacionGeograficaComponent
    }]
},
{
    path: 'servicios',
    children:[
        {
            path:'consulta_externa',
            component: ConsultaExternaComponent
        },
        {
            path:'laboratorio_clinico',
            component: LaboratorioClinicoComponent
        },
        {
            path:'imagenologia',
            component: ImagenologiaComponent
        },
        {
            path:'enfermeria',
            component: EnfermeriaComponent
        },
        {
            path:'farmacia',
            component: FarmaciaComponent
        },
        {
            path:'fisioterapia',
            component: FisioterapiaComponent
        },
        {
            path:'ecografia',
            component: EcografiaComponent
        },
        {
            path:'internacion_clinica_quirurgica',
            component: InternacionClinicaQuirurgicaComponent
        },
        {
            path:'afiliaciones',
            component: AfiliacionesComponent
        },
        {
            path:'fichaje',
            component: FichajeComponent
        }
    ]

},
{
    path: 'personal_de_salud',
    children:[
        {
            path:'administrativo',
            component:AdministrativoComponent
        },
        {
            path:'medico',
            component: MedicoComponent
        }
    ]
},
{
    path: 'contrataciones',
    children:[
        {
            path:'anpe',
            component: AnpeComponent
        },
        {
            path:'directa',
            component: DirectaComponent
        },
        {
            path:'licitacion_publica',
            component: LicitacionPublicaComponent
        },{
            path:'menor',
            component: MenorComponent
        },
        {
            path:'por_exepcion',
            component: PorExepcionComponent
        },
    ]
},
{
    path: 'transparencia',
    children:[
        {
            path:'acesoria_legal',
            component: AcesoriaLegalComponent
        },
        {
            path:'recursos humanos',
            component: RecursosHumanosComponent
        },
        {
            path:'auditoria',
            component: AuditoriaComponent
        },
        {
            path:'historial_de_avisos',
            component: HistorialDeAvisosComponent
        }
    ]
}

];
