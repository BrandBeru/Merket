import { IonAlert, IonButton, IonButtons, IonCard, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonList, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import '../theme/table.css';
import { save } from 'ionicons/icons';
import { find, saveData } from '../Api';
import { useEffect, useState } from 'react';

const AddClient: React.FC = () => {

    const { name, id } = useParams<{ name: string; id: string }>();
    const [client, setClient] = useState<any>({});
    const [isOpen, setIsOpen] = useState(false);
    const history = useHistory();

    useEffect(() => {
        load();
    }, [history.location.pathname]);

    const load = () => {
        if (!('token' in localStorage)) {
            history.push("/login");
        }
        if (id != "add") {
            find("clients/", id).then(data => setClient(data));
        } else {
            client.adminId = localStorage['admin'].id;
        }
    };
    const saveClient = async () => {
        //debugger;
        await saveData("clients/", client, client.id);
        history.push('/clients/');
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{id === 'add' ? 'Add new Client' : 'Edit Client: ' + id}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonCard>
                    <IonRow>
                        <IonCol>
                            <IonInput onIonChange={e => client.name = e.detail.value} value={client.name} label="Name" labelPlacement="floating" fill="outline" placeholder="Enter Name:"></IonInput>
                        </IonCol>
                        <IonCol>
                            <IonInput onIonChange={e => client.lastName = e.detail.value} value={client.lastName} label="Last Name" labelPlacement="floating" fill="outline" placeholder="Enter Last Name:"></IonInput>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonInput onIonChange={e => client.address = e.detail.value} value={client.address} label="Address" labelPlacement="floating" fill="outline" placeholder="Enter Address:"></IonInput>
                        </IonCol>
                        <IonCol>
                            <IonInput onIonChange={e => client.phone = e.detail.value} value={client.phone} label="Phone" labelPlacement="floating" fill="outline" placeholder="Enter Phone:"></IonInput>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonInput onIonChange={e => client.email = e.detail.value} value={client.email} type='email' label="Email" labelPlacement="floating" fill="outline" placeholder="Enter Email:"></IonInput>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonInput onIonChange={e => client.id = e.detail.value} value={client.id} type='text' label="Identification" labelPlacement="floating" fill="outline" placeholder="Enter Identification:"></IonInput>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton color={'success'} onClick={saveClient}>
                                <IonIcon icon={save} slot='start'></IonIcon> Save
                            </IonButton>
                        </IonCol>
                    </IonRow>
                </IonCard>
                <IonAlert
                    isOpen={isOpen}
                    header="Alert!"
                    subHeader="Important message"
                    message="Cannot save this user, internal error!"
                    buttons={['OK']}
                    onDidDismiss={() => setIsOpen(false)}
                ></IonAlert>
            </IonContent>
        </IonPage>
    );
};

export default AddClient;
