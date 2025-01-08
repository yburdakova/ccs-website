import search_img from '@/../public/serch_img.png';
import certificate_img from '@/../public/certificate_img.png'
import scan_img from '@/../public/scan_img.png'
import soft_img from '@/../public/soft_img.png'

export const serviceCards = {
  slides: [
  {
    title: 'Support your public more efficiency',
    subtitle: 'CCS has developed a suite of software solutions to help governments improve the means by which they capture, store, protect and access information assets.',
    image: soft_img,
    path: '/software',
  },
  {
    title: 'Scanning and Digitization Services',
    subtitle: 'To improve the security and accessibility of county records, we offer document scanning services. Our advanced image enhancement capabilities can make images of older documents more readable than the original.',
    image: scan_img,
    path: '/services',
  },
  {
    title: 'Get Certificate Now',
    subtitle: 'GetCertificateNow.com is an online service that allows county offices to securely accept online requests and payment for certified copies of documents, such as birth certificates and marriage licenses.',
    image: certificate_img,
    path: 'https://www.getcertificatenow.com/',
  },
  {
    title: 'Historical Records Search',
    subtitle: 'We can assist your office with making old index books electronically searchable back to the formation of your county without requiring time consuming manual index entry.',
    image: search_img,
    path: '/service',
  },
  ],
};