import { IonButton, IonCard, IonCol, IonInput, IonItem, IonLabel, IonLoading, IonRow } from "@ionic/react"
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { comentario } from "../../@types/comentario";
import { AppDispatch } from "../../store";
import { addComentarioxObjeto } from "../../store/objeto/actions/addComentarioxObjeto";
import { SelectStatusComentarioAdd } from "../../store/objeto/selectors/SelectStatusComentarioAdd";

export const FormComentario = (props: any) => {

    const dispatch = useDispatch<AppDispatch>();
    
    const loading = useSelector(SelectStatusComentarioAdd);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            texto: "",
        },
    });

    const onSubmit = async (data: any) => {
        try {
            const dataform: comentario = {
                texto: data.texto,
                id_objeto: props.idObjeto,
                id_usuario: props.idUsuario,
            }
            console.log(dataform);
            dispatch(addComentarioxObjeto(dataform));
            
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
        >
            <IonRow>
                <IonCol size="10">
                    <IonCard>
                        <IonItem lines="none">
                            <IonLabel position="floating">Comentar</IonLabel>
                            <Controller
                                control={control}
                                name="texto"
                                render={({ field: { onChange, value } }) => (
                                    <IonInput
                                        onIonChange={(e) => onChange(e.detail.value)}
                                        placeholder="Ingresa comentario"
                                        value={value}
                                    ></IonInput>
                                )}
                            />

                        </IonItem>
                    </IonCard>
                </IonCol>
                <IonCol class="ion-align-self-center" size="2">
                    <IonButton style={{ height: 30 }} type="submit" color="primary">Comentar</IonButton>
                </IonCol>
            </IonRow>
            <IonLoading isOpen={loading === "pending"} message={"Creando Comentario..."} />
        </form>
        
    )
}