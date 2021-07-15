# Image Processing API 🖼️

It is a nodejs API to resize jpg images to the wanted dimensions and thus is very helpful in providing lower image sizes for use in different projects.

In case the image is previously resized, it should have been cached and the api provide it preserving the cost of re-processing it again.


### API Endpoint

http://localhost:{port-number}/api/image?name={image-name.jpg}&width={desired-width}&height={desired-height}

### Instructions
- Install project dependencies via terminal.
```
npm install
```
- Run the project via terminal
```
npm build/.
```
- Write the endpoint url as mentioned above, and replace values in curly braces with your values. (default port number used is 3888)
Example:
```
http://localhost:3000/api/image?name=test-img.jpg&width=500&height=300
```
- Image must be a jpg image.
- The images to be resized should be in 📁images at the root directory of the project.
- The resized image will be inside 📁resized-images at the root directory of the project.
- The resized image should have the name {width}-{height}-image-name.jpg. For example if the image name was `test-img.jpg`, the resized 400 x 300 image name will be `400-300-test-img.jpg`.



