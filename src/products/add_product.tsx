import { IonAlert, IonButton, IonButtons, IonCard, IonCheckbox, IonCol, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonSelect, IonSelectOption, IonText, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import '../theme/table.css';
import { save } from 'ionicons/icons';
import { find, list, saveData, send_file } from '../Api';
import { useEffect, useState } from 'react';

const AddProduct: React.FC = () => {

    const { name, id } = useParams<{ name: string; id: string }>();
    const [product, setProduct] = useState<any>({});
    const [isOpen, setIsOpen] = useState(false);
    const [categories, setCategories] = useState([]);
    const [image, setImage] = useState({file: null});
    const [picture, setPicture] = useState<any>();
    const history = useHistory();

    useEffect(() => {
        load_categories();
        load();
    }, [history.location.pathname]);

    const load = async () => {
        if (!('token' in localStorage)) {
            history.push("/login");
        }
        if (id != "add") {
            find("products/", id).then(data => setProduct(data));
        }
    }
    const load_categories = async () => {
        await list("categories/").then(data => setCategories(data));
    }
    const saveProduct = async () => {
        //debugger;
        await saveData("products/", product, "");
        history.push('/products/');
    }
    const handleChange = (e: any) => {
        var value: any = categories.filter(function (item: any) {
            return item.description == e.target.value
        })
        product.categoryId = value[0].id;
    }
    const handleFileSelect = (event: any) => {
        const file = event.target.files[0];
        setImage({file});
        send_file(image);
    
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPicture(reader.result);
            product.pictureUrl = "beru-market/"+file.name;
        };
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{id === 'add' ? 'Add new Product' : 'Edit Product: ' + id}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonCard>
                    <IonRow>
                        <IonCol>
                            <IonSelect placeholder='Select category' label="Category" onIonChange={handleChange} labelPlacement="floating" fill="outline">
                                {
                                    categories.map((category: any) => {
                                        return (
                                            <IonSelectOption key={category.id} value={category.description}>{category.description}</IonSelectOption>
                                        );
                                    })
                                }
                            </IonSelect>
                        </IonCol>
                        <IonCol>
                            <IonInput onIonChange={e => product.code = e.detail.value} value={product.code} label="Code" labelPlacement="floating" fill="outline" placeholder="Enter Code:"></IonInput>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonInput type='number' onIonChange={e => product.price = e.detail.value} value={product.price} label="Price" labelPlacement="floating" fill="outline" placeholder="Enter Price:"></IonInput>
                        </IonCol>
                        <IonCol>
                            <IonInput type='number' onIonChange={e => product.stock = e.detail.value} value={product.stock} label="Stock" labelPlacement="floating" fill="outline" placeholder="Enter Stock:"></IonInput>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonInput onIonChange={e => product.name = e.detail.value} value={product.name} label="Name" labelPlacement="floating" fill="outline" placeholder="Enter Name:"></IonInput>
                        </IonCol>
                        <IonCol>
                            <IonCheckbox onIonChange={(evt) => product.active = evt.target.checked} checked={product.active} >Active</IonCheckbox>
                        </IonCol>
                    </IonRow>
                    <IonRow>
                        <IonItem>
                            <IonThumbnail slot='start'>
                                <img src={picture} alt="" />
                            </IonThumbnail>
                            <input slot='end' type="file" onChange={handleFileSelect} />
                        </IonItem>
                    </IonRow>
                    <IonRow>
                        <IonCol>
                            <IonButton color={'success'} onClick={saveProduct}>
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

export default AddProduct;
