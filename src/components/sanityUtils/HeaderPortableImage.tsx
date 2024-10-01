import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import { Image as SanityImage } from 'sanity'

interface PortableImageProps {
  image?: SanityImage
  alt?: string
  width?: number
  height?: number
  classesImage?: string
  'data-sanity'?: string
}

const HeaderPortableImage = ({
  image,
  alt = 'Cover image',
  classesImage,
  height,
  width,
  ...props
}: PortableImageProps) => {
  const imageUrl = image && urlForImage(image)

  return (
    <>
      {imageUrl && (
        <Image
          className={classesImage}
          src={imageUrl}
          alt={alt || ' '}
          priority={true}
          layout={!width && !height ? 'fill' : 'fixed'}
          objectFit="cover"
          objectPosition="center"
          height={height}
          width={width}
          {...props}
        />
      )}
    </>
  )
}

export default HeaderPortableImage
