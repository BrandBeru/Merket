import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent, IonList, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar, useIonLoading } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import '../theme/table.css';
import { useEffect, useState } from 'react';
import { add, close, pencil } from 'ionicons/icons';
import { list, remove, validate_token } from '../Api';

const ClientsTable: React.FC = () => {

    const { name } = useParams<{ name: string; }>();
    const [clients, setClients] = useState([]);
    const history = useHistory();

    useEffect(() => {
        validate_token()
        searchClients();
    }, [history.location.pathname]);

    const searchClients = async () => {
        if (!('token' in localStorage)) {
            history.push("/login");
        }
        await list("clients/").then(data => {
            setClients(data);
        });
    }
    const removeClient = (id: string) => {
        remove("clients/", id);
        window.location.reload();
    }

    const create = (id: string) => {
        history.push('/client/' + id);
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Clients Management</IonTitle>
                    <IonButton onClick={() => create("add")} slot="end"><IonIcon icon={add}></IonIcon></IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonCard>
                    <IonGrid className='table'>
                        <IonRow>
                            <IonCol>Id</IonCol>
                            <IonCol>Admin Id</IonCol>
                            <IonCol>Name</IonCol>
                            <IonCol>Last Name</IonCol>
                            <IonCol>Phone</IonCol>
                            <IonCol>Address</IonCol>
                            <IonCol>Email</IonCol>
                            <IonCol>Actions</IonCol>
                        </IonRow>
                        {clients.map((client: any) => {
                            return (
                                <IonRow>
                                    <IonCol>{client.id}</IonCol>
                                    <IonCol>{client.adminId}</IonCol>
                                    <IonCol>{client.name}</IonCol>
                                    <IonCol>{client.lastName}</IonCol>
                                    <IonCol>{client.phone}</IonCol>
                                    <IonCol>{client.address}</IonCol>
                                    <IonCol>{client.email}</IonCol>
                                    <IonCol>
                                        <IonButton onClick={() => create(client.id)} color="light"><IonIcon icon={pencil}></IonIcon></IonButton>
                                        <IonButton onClick={() => removeClient(client.id)} color={"danger"}><IonIcon icon={close} ></IonIcon></IonButton>
                                    </IonCol>
                                </IonRow>
                            );
                        })}
                    </IonGrid>
                </IonCard>
                <IonInfiniteScroll>
                    <IonInfiniteScrollContent></IonInfiniteScrollContent>
                </IonInfiniteScroll>
            </IonContent>

        </IonPage>
    );
};

export default ClientsTable;
