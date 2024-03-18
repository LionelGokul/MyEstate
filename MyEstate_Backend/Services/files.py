import boto3
from werkzeug.utils import secure_filename
import os
AWS_S3_ACCESS_KEY = os.getenv("AWS_S3_ACCESS_KEY")
AWS_S3_SECRET_KEY = os.getenv("AWS_S3_SECRET_KEY")
AWS_S3_REGION = os.getenv("AWS_S3_REGION")

print(AWS_S3_ACCESS_KEY)


IMAGE_EXTENSIONS = {'png', 'jpg', 'jpeg'}
IMAGES_UPLOAD_FOLDER = 'static/images/'
API_URL = 'http://127.0.0.1:5000/'
S3_PROP_IMAGES_URL = 'https://my-estate.s3-ap-southeast-1.amazonaws.com/images/properties/'
S3_USER_IMAGES_URL = 'https://my-estate.s3-ap-southeast-1.amazonaws.com/images/users/'
s3_client = boto3.client('s3',
                         aws_access_key_id=AWS_S3_ACCESS_KEY,
                         aws_secret_access_key=AWS_S3_SECRET_KEY,
                         region_name=AWS_S3_REGION
                         )


def validateFile(fileName, extensions):
    return '.' in fileName and \
           fileName.rsplit('.', 1)[1].lower() in extensions


def insertUserImage(image, userId):
    if validateFile(image.filename, IMAGE_EXTENSIONS):
        filename = secure_filename(image.filename)
        s3_client.put_object(ACL='public-read', Body=image, Bucket='my-estate',
                             Key='images/users/' + str(userId) + '/' + filename)
        return S3_USER_IMAGES_URL + str(userId) + '/' + filename
    return False


def insertPropertyImage(image, propertyId):
    if validateFile(image.filename, IMAGE_EXTENSIONS):
        filename = secure_filename(image.filename)
        s3_client.put_object(ACL='public-read', Body=image, Bucket='my-estate',
                             Key='images/properties/' + str(propertyId) + '/' + filename)
        return S3_PROP_IMAGES_URL + str(propertyId) + '/' + filename
    return False


def removePropertyImage(imageName, propertyId):
    s3_client.delete_object(
        Bucket='my-estate',
        Key='images/properties/' + str(propertyId) + '/' + imageName,
    )
    return True
