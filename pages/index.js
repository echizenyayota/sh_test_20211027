import { useState } from "react";
import { Button, Card, Heading, Page, Stack, TextField } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";


const Index = () => {

  const [appendToTitle, setAppendToTitle] = useState('');
  const [appendToDescription, setAppendToDescription] = useState('');
  const [appendToPrice, setAppendPrice] = useState('');
  const [pickerOpen, setPickerOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [showToast, setShowToast] = useState(false);

  return (
    <Page>
      <Heading>Product Updater App</Heading>
      <Card>
        <Card.Section>
          <Stack vertical>
            <TextField
              label="Append to title"
              value={appendToTitle}
              onChange={setAppendToTitle}
            />
            <TextField
              label="Append to description"
              value={appendToDescription}
              onChange={setAppendToDescription}
              multiline={3}
            />
            <TextField
              label="Append to title"
              value={appendToPrice}
              onChange={setAppendPrice}
            />
            <ResourcePicker
              resourceType="Product"
              showVariants={false}
              open={pickerOpen}
              onSelection={ (resource) => {
                console.log(resources);
                setProducts(resources.selection);
              }}
            />
            <Button primary onClick={ () => setPickerOpen(true)}>Select Products</Button>
          </Stack>
        </Card.Section>
      </Card>
    </Page>
  );

};


export default Index; 
