import {
    gridOutline,
    homeOutline,
  } from "ionicons/icons";
import { listPage } from "../@types/listPage";
import { Inventary } from "../pages/inventary";


export const listPages: listPage[] = [
    {
        title: "Inventario",
        url: "/app/inventario",
        component: Inventary,
        menu: true,
        icon: gridOutline,
    },
];