import { useState } from "react";
import { Heading, Page } from "@shopify/polaris";

const Index = () => {

  const [appendToTitle, setAppendToTitle] = useState('');
  const [appendToDescription, setAppendToDescription] = useState('');
  const [appendPrice, setAppendPrice] = useState('');
  const [pickerOpen, setPickerOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [showToast, setShowToast] = useState(false);

  return (
    <Page>
      <Heading>Product Updater App</Heading>
    </Page>
  );

};


export default Index; 
