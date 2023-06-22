import { IonAccordion, IonAccordionGroup, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonInfiniteScroll, IonItem, IonItemDivider, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonSplitPane, IonThumbnail, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './style.css';
import StoreMenu from './store.menu';
import { useEffect } from 'react';
import { connect_server, send_file } from '../Api';
import {decode as base64_decode, encode as base64_encode} from 'base-64';

const Store: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  useEffect(() => {
    const pass = base64_encode("Giobero140206SOFTWARE");
    
    connect_server(pass);
  }, []);

  return (
    <>
      <StoreMenu />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonTitle slot='start'>BrandBeru - Market</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen id='content_client'>
          <IonList>
            <IonInfiniteScroll>
              <IonItemDivider>
                <IonLabel color={'dark'}>Para ti</IonLabel>
              </IonItemDivider>
              <IonGrid>
                <IonRow>
                  <IonCol size='6' sizeLg='2' sizeMd='4'>
                    <IonCard className='card'>
                      <IonCardHeader>
                        <IonCardTitle>Product Name</IonCardTitle>
                        <IonCardSubtitle>Category Name</IonCardSubtitle>
                      </IonCardHeader>
                      <IonCardContent>
                        <IonItem>
                          <img src="https://ae01.alicdn.com/kf/HTB1lWxQIXXXXXcMXXXXq6xXFXXXZ/Free-shipping-Casual-Shoes-For-Men-Fashion-Recreational-Shoe-Male-Canvas-Man-Winter-Fashion-Man-Casual.jpg" alt="Product Shoe store" />
                        </IonItem>
                        <IonItem>
                          <IonLabel>X in stock</IonLabel>
                          <IonLabel slot='end' className='price' color={'danger'}>$520</IonLabel>
                        </IonItem>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                  <IonCol size='6' sizeLg='2' sizeMd='4'>
                    <IonCard className='card'>
                      <IonCardHeader>
                        <IonCardTitle>Product Name</IonCardTitle>
                        <IonCardSubtitle>Category Name</IonCardSubtitle>
                      </IonCardHeader>
                      <IonCardContent>
                        <IonItem>
                          <img src="https://th.bing.com/th/id/R.ef7e382c148d0476caafbf8effc99d29?rik=wtjtmBOxmXqMRQ&riu=http%3a%2f%2fpicture-cdn.wheretoget.it%2fvp2z0c-l-610x610-dress.jpg&ehk=wn%2b%2fdY6qhwLEcJ6yd3Ozr3UvRmNdoQp98PmOYCzqLWA%3d&risl=&pid=ImgRaw&r=0" alt="Product Shoe store" />
                        </IonItem>
                        <IonItem>
                          <IonLabel>X in stock</IonLabel>
                          <IonLabel slot='end' className='price' color={'danger'}>$1150</IonLabel>
                        </IonItem>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                  <IonCol size='6' sizeLg='2' sizeMd='4'>
                    <IonCard className='card'>
                      <IonCardHeader>
                        <IonCardTitle>Product Name</IonCardTitle>
                        <IonCardSubtitle>Category Name</IonCardSubtitle>
                      </IonCardHeader>
                      <IonCardContent>
                        <IonItem>
                          <img src="https://th.bing.com/th/id/R.2d9def233f17791723881e943f50cf82?rik=l3p7ONWd58u1tw&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fdc7%2f69M%2fdc769MEKi.jpg&ehk=0Wwh9oW1IqotZPQOebwrer8sIM7mCi16Ru0SdIXIYok%3d&risl=&pid=ImgRaw&r=0" alt="Product Shoe store" />
                        </IonItem>
                        <IonItem>
                          <IonLabel>X in stock</IonLabel>
                          <IonLabel slot='end' className='price' color={'danger'}>$318</IonLabel>
                        </IonItem>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                </IonRow>
              </IonGrid>
              

              <IonItemDivider>
                <IonLabel color={'dark'}>Mejores calificados</IonLabel>
              </IonItemDivider>
              <IonGrid>
                <IonRow>
                  <IonCol size='6' sizeLg='2' sizeMd='4'>
                    <IonCard className='card'>
                      <IonCardHeader>
                        <IonCardTitle>Product Name</IonCardTitle>
                        <IonCardSubtitle>Category Name</IonCardSubtitle>
                      </IonCardHeader>
                      <IonCardContent>
                        <IonItem>
                          <img src="https://ae01.alicdn.com/kf/HTB1lWxQIXXXXXcMXXXXq6xXFXXXZ/Free-shipping-Casual-Shoes-For-Men-Fashion-Recreational-Shoe-Male-Canvas-Man-Winter-Fashion-Man-Casual.jpg" alt="Product Shoe store" />
                        </IonItem>
                        <IonItem>
                          <IonLabel>X in stock</IonLabel>
                          <IonLabel slot='end' className='price' color={'danger'}>$520</IonLabel>
                        </IonItem>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                  <IonCol size='6' sizeLg='2' sizeMd='4'>
                    <IonCard className='card'>
                      <IonCardHeader>
                        <IonCardTitle>Product Name</IonCardTitle>
                        <IonCardSubtitle>Category Name</IonCardSubtitle>
                      </IonCardHeader>
                      <IonCardContent>
                        <IonItem>
                          <img src="https://th.bing.com/th/id/R.ef7e382c148d0476caafbf8effc99d29?rik=wtjtmBOxmXqMRQ&riu=http%3a%2f%2fpicture-cdn.wheretoget.it%2fvp2z0c-l-610x610-dress.jpg&ehk=wn%2b%2fdY6qhwLEcJ6yd3Ozr3UvRmNdoQp98PmOYCzqLWA%3d&risl=&pid=ImgRaw&r=0" alt="Product Shoe store" />
                        </IonItem>
                        <IonItem>
                          <IonLabel>X in stock</IonLabel>
                          <IonLabel slot='end' className='price' color={'danger'}>$1150</IonLabel>
                        </IonItem>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                  <IonCol size='6' sizeLg='2' sizeMd='4'>
                    <IonCard className='card'>
                      <IonCardHeader>
                        <IonCardTitle>Product Name</IonCardTitle>
                        <IonCardSubtitle>Category Name</IonCardSubtitle>
                      </IonCardHeader>
                      <IonCardContent>
                        <IonItem>
                          <img src="https://th.bing.com/th/id/R.2d9def233f17791723881e943f50cf82?rik=l3p7ONWd58u1tw&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fdc7%2f69M%2fdc769MEKi.jpg&ehk=0Wwh9oW1IqotZPQOebwrer8sIM7mCi16Ru0SdIXIYok%3d&risl=&pid=ImgRaw&r=0" alt="Product Shoe store" />
                        </IonItem>
                        <IonItem>
                          <IonLabel>X in stock</IonLabel>
                          <IonLabel slot='end' className='price' color={'danger'}>$318</IonLabel>
                        </IonItem>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                </IonRow>
              </IonGrid>

              <IonItemDivider>
                <IonLabel color={'dark'}>Mas vendidos</IonLabel>
              </IonItemDivider>
              <IonGrid>
                <IonRow>
                  <IonCol size='6' sizeLg='2' sizeMd='4'>
                    <IonCard className='card'>
                      <IonCardHeader>
                        <IonCardTitle>Product Name</IonCardTitle>
                        <IonCardSubtitle>Category Name</IonCardSubtitle>
                      </IonCardHeader>
                      <IonCardContent>
                        <IonItem>
                          <img src="https://ae01.alicdn.com/kf/HTB1lWxQIXXXXXcMXXXXq6xXFXXXZ/Free-shipping-Casual-Shoes-For-Men-Fashion-Recreational-Shoe-Male-Canvas-Man-Winter-Fashion-Man-Casual.jpg" alt="Product Shoe store" />
                        </IonItem>
                        <IonItem>
                          <IonLabel>X in stock</IonLabel>
                          <IonLabel slot='end' className='price' color={'danger'}>$520</IonLabel>
                        </IonItem>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                  <IonCol size='6' sizeLg='2' sizeMd='4'>
                    <IonCard className='card'>
                      <IonCardHeader>
                        <IonCardTitle>Product Name</IonCardTitle>
                        <IonCardSubtitle>Category Name</IonCardSubtitle>
                      </IonCardHeader>
                      <IonCardContent>
                        <IonItem>
                          <img src="https://th.bing.com/th/id/R.ef7e382c148d0476caafbf8effc99d29?rik=wtjtmBOxmXqMRQ&riu=http%3a%2f%2fpicture-cdn.wheretoget.it%2fvp2z0c-l-610x610-dress.jpg&ehk=wn%2b%2fdY6qhwLEcJ6yd3Ozr3UvRmNdoQp98PmOYCzqLWA%3d&risl=&pid=ImgRaw&r=0" alt="Product Shoe store" />
                        </IonItem>
                        <IonItem>
                          <IonLabel>X in stock</IonLabel>
                          <IonLabel slot='end' className='price' color={'danger'}>$1150</IonLabel>
                        </IonItem>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                  <IonCol size='6' sizeLg='2' sizeMd='4'>
                    <IonCard className='card'>
                      <IonCardHeader>
                        <IonCardTitle>Product Name</IonCardTitle>
                        <IonCardSubtitle>Category Name</IonCardSubtitle>
                      </IonCardHeader>
                      <IonCardContent>
                        <IonItem>
                          <img src="https://th.bing.com/th/id/R.2d9def233f17791723881e943f50cf82?rik=l3p7ONWd58u1tw&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2fdc7%2f69M%2fdc769MEKi.jpg&ehk=0Wwh9oW1IqotZPQOebwrer8sIM7mCi16Ru0SdIXIYok%3d&risl=&pid=ImgRaw&r=0" alt="Product Shoe store" />
                        </IonItem>
                        <IonItem>
                          <IonLabel>X in stock</IonLabel>
                          <IonLabel slot='end' className='price' color={'danger'}>$318</IonLabel>
                        </IonItem>
                      </IonCardContent>
                    </IonCard>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonInfiniteScroll>
          </IonList>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Store;
