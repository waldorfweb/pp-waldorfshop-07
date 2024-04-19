import Vue from "vue";

Vue.filter("itemImages", function(images, accessor)
{
    if (!images)
    {
        return [];
    }

    const imageUrls = [];

    let imagesAccessor = "all";

    if (images.variation && images.variation.length)
    {
        imagesAccessor = "variation";
    }

    for (const image in images[imagesAccessor])
    {
        const imageUrl = images[imagesAccessor][image][accessor];
        const alternate = images[imagesAccessor][image].names ? images[imagesAccessor][image].names.alternate : null;
        const name = images[imagesAccessor][image].names ? images[imagesAccessor][image].names.name : null;
        const width = images[imagesAccessor][image].width;
        const height = images[imagesAccessor][image].height;

        imageUrls.push({ url: imageUrl, position: images[imagesAccessor][image].position, width: width, height: height, alternate, name });
    }

    return imageUrls;
});
