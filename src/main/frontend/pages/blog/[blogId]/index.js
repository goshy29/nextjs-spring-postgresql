import BlogDetails from "@/components/main/blog-section/BlogDetails";
import Head from "next/head";

function BlogDetailsPage(props) {
    if (props.error) {
        return (
            <>
                <Head>
                    <title>Error</title>
                    <meta name="description" content={props.error} />
                </Head>
                <div className="content">
                    <h3>Error: {props.error}</h3>
                </div>
            </>
        );
    }

    return (
        <>
            <Head>
                <title>{props.blogData.title}</title>
                <meta name="description" content={props.blogData.title} />
            </Head>
            <BlogDetails
                id={props.blogData.id}
                title={props.blogData.title}
                name={props.blogData.name}
                date={props.blogData.date}
                experience={props.blogData.experience}
            />
        </>
    );
}

export async function getStaticPaths() {
    try {
        const response = await fetch("http://localhost:8080/api/blog");

        try {
            const blogs = await response.json();

            return {
                fallback: "blocking",
                paths: blogs.map(b => ({ params: { blogId: b.id.toString() } }))
            }
        } catch (err) {
            console.error("Failed to fetch the Blog paths from the database.", err);
            return {
                fallback: "blocking",
                paths: []
            }
        }
    } catch (err) {
        console.error(err.message);
        return {
            fallback: "blocking",
            paths: []
        }
    }
}

export async function getStaticProps(context) {

    function dateFormatter(date) {
        const formattedDate = new Date(date);
        const options = { year: "numeric", month: "long", day: "numeric" };
        return formattedDate.toLocaleDateString("en-US", options);
    }

    const blogId = context.params.blogId;

    try {
        const response = await fetch(`http://localhost:8080/api/blog/${blogId}`);

        try {
            const selectedBlog = await response.json();

            if (!selectedBlog) {
                return {
                    notFound: true
                }
            }

            return {
                props: {
                    blogData: {
                        id: selectedBlog.id.toString(),
                        title: selectedBlog.title,
                        name: selectedBlog.name,
                        date: dateFormatter(selectedBlog.date),
                        experience: selectedBlog.experience
                    }
                }
            }
        } catch (err) {
            return {
                props: {
                    error: "Failed to fetch the Blog from the database."
                }
            }
        }
    } catch (err) {
        return {
            props: {
                error: "Could not connect to the database."
            }
        }
    }
}

export default BlogDetailsPage;