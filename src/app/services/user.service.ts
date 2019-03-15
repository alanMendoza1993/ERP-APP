import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

    private user:any[] = [
      {
      data :{
      name: "David",
      lname: "Varela",
      profilePic: "https://scontent.fmty1-1.fna.fbcdn.net/v/t1.0-9/12573765_10156473906210511_2374247839395876651_n.jpg?_nc_cat=105&_nc_ht=scontent.fmty1-1.fna&oh=1c4bf1eaae51eee16a28f8a5198782d0&oe=5C48CA5B"
      },
      modules : [
        {
          name : "Inicio",
          alias : "home",
          icon: "fa fa-home",
          subModuls : []
        },
        {
          name : "Ventas",
          alias : "sales",
          icon: "fa fa-money",
          subModuls : [
          {
            name : 'Pedidos de ventas',
            alias : 'newPO'
          },
          {
            name : 'Listado',
            alias : 'listPO'
          }
        ]
        },
        /* {
          name : "Compras",
          alias : "buy",
          icon: "fa fa-shopping-cart",
          subModuls : [
          {
            name : 'Requerimiento de compras',
            alias : 'buyRequeriment'
          }
        ]
        }, */
        {
          name : "Tesoreria/Compras",
          alias : "shopping",
          icon: "fa fa-shopping-cart",
          subModuls : [
          {
            name : 'Listado de Materiales',
            alias : 'newShopping'
          },
          /* {
            name : 'Orden de pedido',
            alias : 'pedidos'
          }, */
          {
            name : 'Listado de Compras',
            alias : 'listShopping'
          }
        ]
        },
        {
          name : "Planeación",
          alias : "planning",
          icon: "fa fa-tasks",
          subModuls : [
            /* {
              name : "Recepción",
              alias : "reception"
            }, */
            {
              name : "Cálculo",
              alias : "calculation"
            },
            /* {
              name : "Materia Prima",
              alias : "material"
            }, */
            /* {
              name : "Reporte",
              alias : "report"
            },
            {
              name : "Notificación",
              alias : "notification"
            }, */
            {
              name : "Listado",
              alias : "list"
          }/* ,
          {
            name : "Entrantes ",
            alias : "incoming"
          } *//* ]
        },
        {
        name : "Proveedores",
        alias : "providers",
        icon: "fa fa-truck",
        subModuls : [
          {
            name : "Orden de Compra",
            alias : "oc"
          }, */
          /* {
            name : "Perfiles",
            alias : "providers"
          } */
          /* ,{
            name : "Listado",
            alias : "list"
          } */]
        },{
          name : "Recursos Humanos",
          alias : "rh",
          icon: "fa fa-user-circle",
          subModuls : [
            {
              name : "Empleados",
              alias : "nominas"
            }/* ,{
              name : "Listado",
              alias : "list"
            } */]
          },
         /* {
          name : "Producción",
          alias : "production",
          icon: "fa fa-cogs",
          subModuls : [ {
            name : 'Nueva OP',
            alias : 'newPO'
          },
           {
              name: "Reporte",
              alias: "reportPro"
            },{
              name: "Cola de Produccion",
              alias: "colaProduccion"
            }
          ]
        }, */
        {
          name : "Inventario",
          alias : "inventory",
          icon: "fa fa-edit",
          subModuls : [
            {
              name: "Recepción de Mercancía",
              alias: "recepcionMercancia"
            },
            {
              name: "Alamacen",
              alias: "warehouse"
            },
            {
              name: "Distribucion",
              alias: "distribution"
            }/* ,
            {
              name: "Gestión de Inventario",
              alias: "editInventory"
            },
            {
              name: "Gestión de Artículos",
              alias: "editArt"
            },
            {
              name: "Reportes",
              alias: "reportInv"
            },
            {
              name: "Otro",
              alias: "other"
            },
            {
              name: "Lotes",
              alias: "lote"
            },
            {
              name: "Gestión de Inventario",
              alias: "editInventory"
            },
            {
              name: "Códigos de Barra",
              alias: "barCode"
            },
            {
              name: "Materia Prima",
              alias: "MaterialInv"
            },
            {
              name: "Costos",
              alias: "costs"
            } */
          ]
        }/*,
        {
          name: "Configuración",
          alias: "config",
          subModuls : [
            {
              name: "Usuarios",
              alias: "users"
            },
            {
              name: "Tipo de Perfil",
              alias: "roles"
            },
            {
              name: "Seguridad",
              alias: "security"
            },
            {
              name: "Historial de Acciones",
              alias: "acciones"
            },
            {
              name: "Catálogos",
              alias: "catalogo"
            }
          ]
        }
        ,
        {
           name : "Pantallas",
          alias : "screens",
          subModuls : [
            /* { name : "Inicio de Sesión",
            alias : "signIn"
          }
          ]
        } */]
    }
  ]



    getUser():any{
      return this.user;
    }
}
