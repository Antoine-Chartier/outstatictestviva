import Layout from "@/components/Layout"

const Contact = () => {


  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-5">
        <section className="mt-16 mb-16 md:mb-12">
          <div
            className="prose lg:prose-2xl home-intro"
            dangerouslySetInnerHTML={{ __html: "content" }}
          />
        </section>
      </div>
    </Layout>
  )
}


export default Contact

