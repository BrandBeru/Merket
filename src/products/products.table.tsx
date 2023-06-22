import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInfiniteScroll, IonInfiniteScrollContent, IonList, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar, useIonLoading } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import '../theme/table.css';
import { useEffect, useState } from 'react';
import { add, close, pencil } from 'ionicons/icons';
import { list, remove } from '../Api';
import jwtDecode from 'jwt-decode';

const ProductsTable: React.FC = () => {

    const { name } = useParams<{ name: string; }>();
    const [products, setProducts] = useState([]);
    const history = useHistory();

    useEffect(() => {
        searchClients();
    }, [history.location.pathname]);

    const searchClients = async () => {
        if (!('token' in localStorage)) {
            history.push("/login");
        }
        await list("products/").then(data => {
            setProducts(data);
        });
    }
    const removeClient = (id: string) => {
        remove("products/", id);
        window.location.reload();
    }

    const create = (id: string) => {
        history.push('/product/' + id);
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Products Management</IonTitle>
                    <IonButton onClick={() => create("add")} slot="end"><IonIcon icon={add}></IonIcon></IonButton>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <IonCard>
                    <IonGrid className='table'>
                        <IonRow>
                            <IonCol>Id</IonCol>
                            <IonCol>Category Id</IonCol>
                            <IonCol>Name</IonCol>
                            <IonCol>Price</IonCol>
                            <IonCol>Stock</IonCol>
                            <IonCol>State</IonCol>
                            <IonCol>Actions</IonCol>
                        </IonRow>
                        {products.map((product: any) => {
                            return (
                                <IonRow>
                                    <IonCol>{product.id}</IonCol>
                                    <IonCol>{product.categoryId}</IonCol>
                                    <IonCol>{product.name}</IonCol>
                                    <IonCol>{product.price}</IonCol>
                                    <IonCol>{product.stock}</IonCol>
                                    <IonCol>{product.active ? "Active" : "Inactive"}</IonCol>
                                    <IonCol>
                                        <IonButton onClick={() => create(product.id)} color="light"><IonIcon icon={pencil}></IonIcon></IonButton>
                                        <IonButton onClick={() => removeClient(product.id)} color={"danger"}><IonIcon icon={close} ></IonIcon></IonButton>
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

export default ProductsTable;
