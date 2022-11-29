import { IonAccordion, IonAccordionGroup, IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from "@ionic/react"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { listObjetos } from "../../store/objeto/actions/listObjetos";
import { initObjetoState } from "../../store/objeto";
import { selectListObjetos } from "../../store/objeto/selectors/SelectListObjetos";
import { FormComentario } from "../../components/inventary/formComentario";
import { selectUser } from "../../store/users/selectors/SelectUser";

export const Inventary: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();

    const usuario = useSelector(selectUser);

    const usuarioId = usuario?.id;

    useEffect(() => {
        dispatch(initObjetoState());
        dispatch(listObjetos());
    }, [dispatch]);

    const ListaObjetos = useSelector(selectListObjetos);

    return (
        <IonPage id="main-content">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Inventario</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <section className="ion-padding">
                    <IonGrid>
                        <IonRow class="ion-justify-content-center">
                            <IonCol size="6">
                                <IonCard style={{ borderRadius: 10 }}>
                                    <IonItem>
                                        <IonLabel position="floating">Buscar</IonLabel>
                                        <IonInput></IonInput>
                                    </IonItem>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                        <IonList>
                            {ListaObjetos?.map((objeto, index) => (
                                <IonItem lines="none" key={index}>
                                    <IonCard style={{ width: "100%" }} class="ion-padding">
                                        <IonRow class="ion-margin-bottom">
                                            <IonCol size="auto">
                                                <IonRow>
                                                    <IonText style={{ fontSize: 20, fontWeight: 600 }} color="dark">{objeto.nombre}</IonText>
                                                </IonRow>
                                                <IonRow class="ion-margin-top">
                                                    <IonText color="dark">{objeto.descripcion}</IonText>
                                                </IonRow>
                                            </IonCol>
                                        </IonRow>
                                        <IonRow style={{ "borderTop": "1px solid #000" }} class="ion-justify-content-center">
                                            <IonItem style={{ width: "100%" }} lines="none">
                                                <IonAccordionGroup style={{ width: "100%" }} expand="inset">
                                                    <IonAccordion>
                                                        <IonItem slot="header" color="light">
                                                            <IonLabel>Comentarios</IonLabel>
                                                        </IonItem>
                                                        <div className="ion-padding" slot="content">
                                                            <FormComentario idObjeto={objeto.id} idUsuario={usuarioId} />
                                                            {objeto.comentarios.map((comentario:any, index:any) => (
                                                                <IonList key={index}>
                                                                    <IonItem lines="none">
                                                                        <IonLabel color="dark" style={{ fontSize: 20 }}>{comentario.usuario.name}</IonLabel>
                                                                    </IonItem>
                                                                    <IonItem >
                                                                        <IonText style={{ fontSize: 14 }}>{comentario.texto}</IonText>
                                                                    </IonItem>
                                                                </IonList>
                                                            ))}
                                                        </div>
                                                    </IonAccordion>
                                                </IonAccordionGroup>
                                            </IonItem>
                                        </IonRow>
                                    </IonCard>
                                </IonItem>
                            ))}
                        </IonList>
                    </IonGrid>
                </section>
            </IonContent>
        </IonPage>
    )
}