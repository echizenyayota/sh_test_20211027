import { useState, useMemo } from "react";
import { Button, Card, DataTable, EmptyState, Heading, Page, Stack, TextField } from "@shopify/polaris";
import { ResourcePicker } from "@shopify/app-bridge-react";


const Index = () => {

  const [appendToTitle, setAppendToTitle] = useState('');
  const [appendToDescription, setAppendToDescription] = useState('');
  const [appendToPrice, setAppendPrice] = useState('');
  const [pickerOpen, setPickerOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [showToast, setShowToast] = useState(false);

  const productTableDisplayData = useMemo(() => products.map((product) => [
    product.id,
    product.title,
    `${product.title}${appendToTitle}`,
    product.descriptionHtml,
    `${product.descriptionHtml}${appendToDescription}`,
    product.variants[0].price
  ]), [products, appendToTitle, appendToDescription, appendToPrice]);

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
              onSelection={ (resources) => {
                console.log(resources);
                setProducts(resources.selection);
              }}
            />
            <Button primary onClick={() => setPickerOpen(true)}>Select Products</Button>
          </Stack>
        </Card.Section>
        <Card.Section>
          {productTableDisplayData.length ? <DataTable
            columnContentTypes={['text', 'text', 'text', 'text', 'text', 'numeric', 'numeric']}
            headings={['ID', 'Old Title', 'NewTitle', 'Old Description', 'New Description','Old Price', 'New Price']}
            rows={productTableDisplayData}
          /> : <EmptyState heading="No products selection"/>}
        </Card.Section>
      </Card>
    </Page>
  );

};


export default Index; 
