import {
    gridOutline,
    homeOutline,
  } from "ionicons/icons";
import { listPage } from "../@types/listPage";
import { Inventary } from "../pages/inventary";
import { AddObjeto } from "../pages/addObjeto";


export const listPages: listPage[] = [
    {
        title: "Inventario",
        url: "/app/inventario",
        component: Inventary,
        menu: true,
        icon: gridOutline,
    },
    {
        title: "Agregar Objeto",
        url: "/app/agregar-objeto",
        component: AddObjeto,
        menu: true,
        icon: homeOutline,
    }
];