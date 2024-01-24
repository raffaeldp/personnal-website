import { urlForImage } from '@/sanity/lib/image'
import Image from 'next/image'
import { Image as SanityImage } from 'sanity'

interface PortableImageProps {
  image?: SanityImage
  alt?: string
  size?: string
  classesImage?: string
  'data-sanity'?: string
}

const HeaderPortableImage = ({
  image,
  alt = 'Cover image',
  classesImage,
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
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      )}
    </>
  )
}

export default HeaderPortableImage
