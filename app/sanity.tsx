import { ClientConfig, createClient } from 'next-sanity'

import { PortableText as PortableTextComponent } from '@portabletext/react'
import createImageUrlBuilder from '@sanity/image-url'

export const config: ClientConfig = {
	projectId: '1jh6i18l',
	dataset: 'production',
	token: 'sk9rgMfkQhEWvU9llRGq3GKHYRVQzZo0lZnCS1pLMUfUqotx8oWuLzZYzhCAdCiNhnisEhaczw4C2mKOGZPX9UBN15rTHVhrR1SojK8Y8UMucpIMDsjlDWSLEjBjdVO2XrI9SzdJYo9VqOqBt74KlN3A3CvRy8wHsk4laZyL2rsizYRVFYRx',
	apiVersion: '2021-10-21',
	useCdn: false
}

export const sanityClient = createClient(config)

export const urlFor = source =>
	createImageUrlBuilder({ clientConfig: config }).image(source)
export const PortableText = props => (
	<PortableTextComponent components={{}} {...props} />
)
