import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonGrid, IonCard, IonCol, IonInput, IonItem, IonLabel, IonRow, IonButton, IonText } from "@ionic/react"
import { Controller, useForm } from "react-hook-form"
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { addObjeto } from "../../store/objeto/actions/addObjeto";

export const AddObjeto: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();
    
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            nombre: "",
            descripcion: "",
        },
    });

    const onSubmit = async (data: any) => {
        try {
            console.log(data);
            dispatch(addObjeto(data));
        } catch (error) {
            console.log(error);
        }
    }

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
                            <IonText style={{fontSize:22, fontWeight:600}}>Agregar Objeto</IonText>
                        </IonRow>
                        <IonRow class="ion-justify-content-center">
                            <IonCol size="8">
                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                >
                                    <IonCard style={{ borderRadius: 10 }}>
                                        <IonItem>
                                            <IonLabel position="floating">Nombre</IonLabel>
                                            <Controller 
                                                control={control}
                                                name="nombre"
                                                render={({ field: { onChange, value}}) => (
                                                    <IonInput
                                                        onIonChange={(e) => onChange(e.detail.value)}
                                                        value={value}
                                                    ></IonInput>
                                                )}
                                            />
                                            
                                        </IonItem>
                                    </IonCard>
                                    <IonCard style={{ borderRadius: 10 }}>
                                        <IonItem>
                                            <IonLabel position="floating">Descripcion</IonLabel>
                                            <Controller 
                                                control={control}
                                                name="descripcion"
                                                render={({ field: { onChange, value}}) => (
                                                    <IonInput
                                                        onIonChange={(e) => onChange(e.detail.value)}
                                                        value={value}
                                                    ></IonInput>
                                                )}
                                            />
                                            
                                        </IonItem>
                                    </IonCard>
                                    <IonRow class="ion-justify-content-center">
                                        <IonButton color="primary" type="submit">Subir Objeto</IonButton>
                                    </IonRow>
                                </form>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </section>
            </IonContent>
        </IonPage>
    )
}