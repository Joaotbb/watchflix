import { Form } from '_components/Molecules';
import Seo from '_components/Organisms/Seo/Seo';
import { Layout, Navbar } from '_components/Organisms';

export const ContactsPage = () => {
  return (
    <>
      <Seo
        title='WatchFlix | Contact Us'
        description="Get in touch with the WatchFlix team. If you have any questions, suggestions, or feedback, feel free to reach out to us. We'd love to hear from you!"
      />

      <Layout>
        <Navbar />
        <div className='bg-primary-900 min-h-screen'>
          <div className='p-16'>
            <h1>Contacts</h1>
            <Form />
          </div>
        </div>
      </Layout>
    </>
  );
};
