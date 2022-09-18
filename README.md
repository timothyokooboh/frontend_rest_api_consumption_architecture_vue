# frontend_api_consumption_architecture_vue

This is a REST API consumption architecture pattern for frontend applications. <br>
A demo for its use in a Vue app is also provided <a href="https://codesandbox.io/p/github/timothyokooboh/frontend_rest_api_consumption_architecture_vue/draft/beautiful-wing?file=%2FREADME.md" target="_blank">here</a>

<a href="https://github.com/timothyokooboh/frontend_rest_api_consumption_architecture_react">Here</a> is the same architecture pattern demonstrated with React.js

## Dependencies
1. Typescript
2. Axios
3. Vue

## Key highlights
1. Typed API endpoints.
2. Endpoints documented as constants that leverage the `APIEndpoint` type <br>
which is a union type described below <br>
```
  type APIEndpoint =
  | GETAPIEndpoint
  | POSTAPIEndpoint
  | PUTAPIEndpoint
  | PATCHAPIEndpoint
  | DELETEAPIEndpoint;

export default APIEndpoint;
```
3. A `useResource` composable that handles every API call thereby providing <br> a DRY approach to API consumption
across the entire application. <br>
This single composable function returns three states to the consumer component <br>
```
a. loading
b. response
c. error
```

## Example Usage
```
  import useResource from "./composables/useResource";
  import { LIST_COUNTRIES } from "./models/CountriesModel";

  const { loading, response, error } = useResource(LIST_COUNTRIES);
```
Where `LIST_COUNTRIES` is a constant that documents the endpoint <br>
for listing countries from an API
```
 export const LIST_COUNTRIES: GETAPIEndpoint = {
  url: "/v3.1/all",
  method: "GET"
};
```
