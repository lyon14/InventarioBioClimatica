import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonGrid, IonCard, IonCol, IonInput, IonItem, IonLabel, IonRow, IonButton, IonText, IonLoading } from "@ionic/react"
import { useState } from "react";
import { Controller, useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store";
import { addObjeto } from "../../store/objeto/actions/addObjeto";
import { SelectStatusAddObjeto } from "../../store/objeto/selectors/SelectStatusAddObjeto";

export const AddObjeto: React.FC = () => {

    const dispatch = useDispatch<AppDispatch>();

    const loading = useSelector(SelectStatusAddObjeto);

    const [base64Image, setBase64Image] = useState('');

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

    // Agregamos un manejador para el evento de carga de archivos
    const handleFileChange = (event: any) => {
        // Obtenemos el archivo seleccionado
        const file = event.target.files[0];

        // Verificamos que el archivo sea una imagen
        if (file.type.startsWith('image/')) {
            // Creamos un objeto FileReader para leer el contenido del archivo
            const reader = new FileReader();

            // Asignamos una función al evento onload del FileReader
            reader.onload = () => {
                // Al cargar el archivo, obtenemos el resultado como base64 y lo guardamos en el estado
                setBase64Image(reader.result as string);
            };

            // Iniciamos la lectura del archivo
            reader.readAsDataURL(file);
        }
    };

    const onSubmit = async (data: any) => {
        try {
            data.imagen = base64Image;
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
                                    <IonCard style={{ borderRadius: 10 }}>
                                        <IonItem>
                                        <input 
                                            type="file" 
                                            accept="image/*" 
                                            onChange={handleFileChange}
                                        />
                                        </IonItem>
                                    </IonCard>
                                    <IonRow class="ion-justify-content-center">
                                        <IonButton color="primary" type="submit">Subir Objeto</IonButton>
                                    </IonRow>
                                    <IonLoading isOpen={loading === "pending"} message={"Creando Objeto..."} />
                                </form>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </section>
            </IonContent>
        </IonPage>
    )
}