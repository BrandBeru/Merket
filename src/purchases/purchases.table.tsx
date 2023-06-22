import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent, IonList, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar, useIonLoading } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import '../theme/table.css';
import { useEffect, useState } from 'react';
import { add, close, pencil } from 'ionicons/icons';
import { list, remove } from '../Api';
import jwtDecode from 'jwt-decode';

const PurchasesTable: React.FC = () => {

    const { name } = useParams<{ name: string; }>();
    const [purchases, setPurchases] = useState([]);
    const history = useHistory();

    useEffect(() => {
        searchClients();
    }, [history.location.pathname]);

    const searchClients = () => {
        if (!('token' in localStorage)) {
            history.push("/login");
        }
        list("purchases/").then(data => {
            setPurchases(data);
        });
    }
    const removeClient = (id: string) => {
        remove("clients/", id);
        window.location.reload();
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Purchases Management</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonCard>
                    <IonGrid className='table'>
                        <IonRow>
                            <IonCol>Id</IonCol>
                            <IonCol>Client Id</IonCol>
                            <IonCol>Date</IonCol>
                            <IonCol>Payment Method</IonCol>
                            <IonCol>Comment</IonCol>
                            <IonCol>State</IonCol>
                            <IonCol>Actions</IonCol>
                        </IonRow>
                        {purchases.map((purchase: any) => {
                            return (
                                <IonRow>
                                    <IonCol>{purchase.id}</IonCol>
                                    <IonCol>{purchase.clientId}</IonCol>
                                    <IonCol>{purchase.date}</IonCol>
                                    <IonCol>{purchase.paymentMethod}</IonCol>
                                    <IonCol>{purchase.comment}</IonCol>
                                    <IonCol>{purchase.state}</IonCol>
                                    <IonCol>
                                        <IonButton color="light"><IonIcon icon={pencil}></IonIcon></IonButton>
                                        <IonButton onClick={() => removeClient(purchase.id)} color={"danger"}><IonIcon icon={close} ></IonIcon></IonButton>
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

export default PurchasesTable;
