import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Typography, Paper, Fade, Link, Chip } from '@mui/material';
import { keyframes } from '@mui/system';

const ImplementingCommandRWithRAG = () => {
  const neonGlowAnimation = keyframes`
    0% {
      text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
    }
    50% {
      text-shadow: 0 0 20px rgba(0, 255, 255, 0.8);
    }
    100% {
      text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
    }
  `;

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <HelmetProvider>
      <ThemeProvider theme={darkTheme}>
        <div>
          <Helmet>
            <title>RAG And Why It Matters</title>
            <meta name="description" content="Retrieval Augmented Generation (RAG) can transform AI into a strategic asset, delivering more precise, customised solutions." />
            <meta property="og:title" content="RAG And Why It Matters" />
            <meta property="og:description" content="Retrieval Augmented Generation (RAG) can transform AI into a strategic asset, delivering more precise, customised solutions." />
            <meta property="og:url" content="https://deepvertical.ai/insights/implementingcommandrawithrag" />
            <meta property="og:image" content="https://deepvertical.ai/static/images/insight1.gif" />
          </Helmet>
          
          {/* Refactored Introduction Section */}
          <Box
            sx={{
              width: '100%',
              minHeight: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url("/static/images/insight1.png") no-repeat center',
              backgroundSize: 'cover',
              color: 'common.white',
              py: { xs: 4, md: 8 },
              px: { xs: 2, md: 4 },
            }}
          >
            <Box sx={{ maxWidth: '1200px', textAlign: 'left', px: { xs: 2, md: 4 } }}>
              <Fade in timeout={500}>
                <Chip
                  label="Last Updated: 03 April 2024"
                  sx={{
                    mb: 4,
                    px: 2,
                    py: 1,
                    fontWeight: 'bold',
                    fontSize: '1rem',
                    borderRadius: '24px',
                    background: 'linear-gradient(45deg, #00ffff, #7fffd4)',
                    color: '#000',
                    boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)',
                    animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                  }}
                />
              </Fade>
              <Fade in timeout={1000}>
                <Typography
                  variant="h3"
                  component="h1"
                  gutterBottom
                  sx={{
                    fontWeight: 'bold',
                    mb: 4,
                    animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                    background: 'linear-gradient(45deg, #00ffff, #7fffd4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  RAG And Why It Matters
                </Typography>
              </Fade>
              <Fade in timeout={1500}>
                <Typography
                  variant="h5"
                  paragraph
                  sx={{
                    mb: 4,
                    maxWidth: '1200px',
                    animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                    textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                  }}
                >
                  Retrieval Augmented Generation (RAG) integrates the retrieval of external data with generative AI models, enabling more nuanced and informed output generation. This approach has important practical implications for the development and application of AI systems across various domains.
                </Typography>
              </Fade>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    mb: 2,
                    animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                    textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                  }}
                >
                  By leveraging external knowledge sources, RAG empowers AI models to generate text outputs that are grounded in factual information, reducing the risk of hallucinations or inconsistencies. The integration of RAG into business applications offers several key benefits:
                </Typography>
                <ul style={{ marginBottom: '16px' }}>
                  <li>Accuracy and Consistency: RAG improves the factual accuracy of responses by retrieving information from up-to-date external sources. This is particularly relevant in dynamic fields where data rapidly changes, such as scientific research or market trends. For instance, an AI system using RAG could generate reports or answers that reflect the most current findings, enhancing the reliability of automated research summaries or data analyses.</li>
                  <li>Contextual Relevance: The technique enhances the ability of AI to generate contextually relevant responses by utilizing information pertinent to the specific query or task at hand. This capability is critical in applications such as personalized recommendations or adaptive learning systems, where the context and individual user needs guide the generation of content.</li>
                  <li>Adaptability and Customization: RAG's modular nature allows for the adaptation of the retrieval component to specific knowledge bases or databases, facilitating customization to various domains without extensive retraining of the generative model. This adaptability makes RAG suitable for specialized applications, from legal document analysis to medical advice systems, where domain-specific accuracy is paramount.</li>
                  <li>Efficiency in Learning: By leveraging external databases, RAG models can achieve high performance with potentially less training data compared to models that rely solely on their parameters to store knowledge. This efficiency is beneficial in scenarios where collecting large, annotated datasets is impractical or impossible, such as in niche academic subjects or languages with limited digital resources.</li>
                  <li>Transparency and Interpretability: The retrieval component of RAG provides a traceable link between the generated output and the source data, offering a degree of interpretability regarding how the model arrived at its response. This transparency is essential in academic and professional settings where understanding the model's decision-making process is as important as the accuracy of its outputs.</li>
                  <li>Mitigation of Biases: While not inherently bias-free, the design of RAG systems allows for the curated selection of data sources, potentially mitigating biases present in the training data of generative models. This aspect is crucial in creating fairer and more equitable AI systems, although it requires careful consideration and management of the sources used for information retrieval.</li>
                </ul>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                    textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                  }}
                >
                  By harnessing the power of RAG, businesses can transform their AI applications, delivering more precise, reliable, and customized solutions to their customers and stakeholders. The ability to incorporate relevant contextual information and generate inline citations ensures the credibility and trustworthiness of AI-generated content, making RAG an essential tool for any organization looking to leverage AI in their operations.
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                    textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                  }}
                >
                  In the sections below we present a detailed case study on the implementation and advantages of using Cohere's Command R model, specifically highlighting its integration with Retrieval-Augmented Generation (RAG). Deep Vertical AI appreciates this model for its ability to generate precise and substantiated responses in diverse business scenarios, leveraging advanced natural language processing and information retrieval techniques to ensure accuracy and reliability.
                </Typography>
            </Box>
          </Box>


          {/* ... Rest of the content ... */}
          <Box
            sx={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'linear-gradient(45deg, #000000, #1a237e)',
              color: 'common.white',
              py: { xs: 4, md: 8 },
              px: { xs: 2, md: 4 },
            }}
          >
            <Box
              sx={{
                width: '100%',
                maxWidth: '1200px',
                mx: 'auto',
                mb: { xs: 4, md: 8 },
              }}
            >           

                <Fade in timeout={2000}>
                  <Box sx={{ width: '100%', maxWidth: '1200px', mx: 'auto', mb: 8 }}>
                    <Paper
                      elevation={3}
                      sx={{
                        p: { xs: 2, md: 4 },
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '16px',
                        boxShadow: '0 4px 30px rgba(0, 255, 255, 0.2)',
                        border: '1px solid rgba(0, 255, 255, 0.3)',
                      }}
                    >
                      <Typography
                        variant="h4"
                        align="center"
                        gutterBottom
                        sx={{
                          fontWeight: 'bold',
                          mb: 4,
                          color: '#00ffff',
                          animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                        }}
                      >
                        Case study: Using Cohere's Command R model to unlock the benefits of RAG
                      </Typography>
                      <Typography
                        variant="body1"
                        paragraph
                        sx={{
                          mb: 4,
                          animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                          textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                        }}
                      >
                        Cohere's Command R model is a powerful tool for generating accurate and well-grounded responses in various business applications. One of the key reasons we like this model so much at Deep Vertical AI is its integration of RAG.
                      </Typography>
                      <Typography
                        variant="body1"
                        paragraph
                        sx={{
                          mb: 4,
                          animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                          textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                        }}
                      >
                        From a technical perspective, the Command R model's implementation of RAG involves several key components. First, the model is trained to effectively process and utilize the provided document snippets, extracting relevant information and incorporating it into the generated response. This requires sophisticated natural language processing techniques, such as named entity recognition and coreference resolution, to accurately identify and link the relevant pieces of information across multiple documents.
                      </Typography>
                      <Typography
                        variant="body1"
                        paragraph
                        sx={{
                          mb: 4,
                          animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                          textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                        }}
                      >
                        Second, the model is designed to generate inline citations, indicating the source of the information used in the response. This is achieved through a combination of text generation and information retrieval techniques, allowing the model to seamlessly integrate the citations into the generated text while maintaining coherence and readability.
                      </Typography>
                      <Typography
                        variant="body1"
                        paragraph
                        sx={{
                          animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                          textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                        }}
                      >
                        Thirdly, the Command R model's architecture is optimized for efficient processing of large amounts of contextual information, enabling it to handle long input sequences and generate high-quality responses in real-time. This is made possible by advanced techniques such as attention mechanisms and memory-efficient transformers, which allow the model to effectively capture and utilize the relevant information from the provided documents.
                      </Typography>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                          mt: 4,
                        }}
                      >
                        <Link
                          href="mailto:john@deepvertical.ai" 
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            color: '#00ffff',
                            textDecoration: 'none',
                            animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                            '&:hover': {
                              color: '#7fffd4',
                            },
                          }}
                        >
                          Contact us for a demo of the Command R model in a real-life business application{' '}
                          <Box
                            component="span"
                            sx={{
                              ml: 1,
                              fontSize: '1.5rem',
                              fontWeight: 'bold',
                            }}
                          >
                            →
                          </Box>
                        </Link>
                      </Box> 

                    </Paper>
                  </Box>
                </Fade>

                <Box sx={{ width: '100%', maxWidth: '1200px', mx: 'auto' }}>
                  <Fade in timeout={2000}>
                    <Typography
                      variant="h4"
                      align="center"
                      gutterBottom
                      sx={{
                        fontWeight: 'bold',
                        mb: 4,
                        color: '#00ffff',
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                      }}
                    >
                      Complexities and Learnings
                    </Typography>
                  </Fade>

                  <Fade in timeout={2500}>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        mb: 4,
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                        textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                      }}
                    >
                      Implementing the LLM Command R with RAG can be more complex than it may appear at first glance due to the following reasons:
                    </Typography>
                  </Fade>

                  <Fade in timeout={3000}>
                    <Box>
                      <Typography
                        variant="body1"
                        paragraph
                        sx={{
                          mb: 2,
                          animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                          textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                        }}
                      >
                        <strong>Handling of documents and citations:</strong> The Command R model can return not only the generated text, but also a list of relevant documents and citations. This requires the API and the React component to handle these additional data structures and incorporate them into the response and UI.
                      </Typography>
                      <Typography
                        variant="body1"
                        paragraph
                        sx={{
                          mb: 2,
                          animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                          textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                        }}
                      >
                        <strong>Error handling and robustness:</strong> The implementation needs to be able to handle various types of errors, such as missing required parameters, API failures, and unexpected responses from the LLM model. Proper error handling and graceful error reporting are crucial for a reliable and user-friendly application.
                      </Typography>
                      <Typography
                        variant="body1"
                        paragraph
                        sx={{
                          mb: 2,
                          animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                          textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                        }}
                      >
                        <strong>Performance and scalability:</strong> As the number of chat messages and the complexity of the LLM model increase, the performance and scalability of the application become more important. Optimizing the API and the React component for efficient data processing and rendering is essential for providing a smooth user experience.
                      </Typography>
                      <Typography
                        variant="body1"
                        paragraph
                        sx={{
                          mb: 8,
                          animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                          textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                        }}
                      >
                        <strong>Flexibility and extensibility:</strong> The implementation should be designed in a way that allows for easy integration of new LLM models and future enhancements, such as additional connectors or features. A modular and extensible architecture can help ensure the long-term maintainability and adaptability of the application.
                      </Typography>
                    </Box>
                  </Fade>

                  <Fade in timeout={3500}>
                    <Typography
                      variant="h4"
                      align="center"
                      gutterBottom
                      sx={{
                        fontWeight: 'bold',
                        mb: 4,
                        color: '#00ffff',
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                      }}
                    >
                      Specifics of the Implementation
                    </Typography>
                  </Fade>

                  <Fade in timeout={6500}>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        mb: 8,
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                        textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                      }}
                    >
                      The key challenge in rendering the Command R response is handling the additional data structures, such as documents and citations, that are returned by the model. The `Message` component in the provided code demonstrates how to render these elements, including the inline citations and links to the relevant documents.
                      <br />
                      <br />
                      The RAG component of the Command R response increases the efficacy of the model by providing it with relevant context, which can significantly improve the accuracy of the generated text. However, it's important to note that RAG does not guarantee accuracy, as the provided documents may themselves be out-of-date, inaccurate, or biased. To address this, the implementation includes inline citations, which allow users to verify the information and the sources used by the model.
                      <br />
                      <br />
                      Another key challenge in the end-to-end integration of the API, completion, and frontend JavaScript is ensuring a seamless and efficient flow of information between these components. The Flask API is responsible for handling the incoming requests, interacting with the LLM model, and returning the appropriate response. The `CommandRModel` class encapsulates the logic for generating the response using the Cohere API, including the handling of documents and citations.
                      <br />
                      <br />
                      On the frontend, the React component is responsible for rendering the chat messages, including the proper formatting and display of the documents and citations. This requires careful coordination between the API and the frontend to ensure that the data is correctly passed and processed. The use of state management and event handling in the React component is crucial for maintaining a responsive and user-friendly interface.
                      <br />
                      <br />
                      By addressing these challenges and integrating the various components seamlessly, the implementation can effectively leverage the power of the RAG feature in the Command R model to provide users with accurate and well-grounded responses, while also allowing them to verify the information through the provided citations and document links.
                    </Typography>
                  </Fade>

                  <Fade in timeout={3500}>
                    <Typography
                      variant="h4"
                      align="center"
                      gutterBottom
                      sx={{
                        fontWeight: 'bold',
                        mb: 4,
                        color: '#00ffff',
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                      }}
                    >
                      Implementation Example 1: Multi-model Flask API
                    </Typography>
                  </Fade>

                  <Fade in timeout={4000}>
                    <Paper
                      elevation={3}
                      sx={{
                        p: 4,
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '16px',
                        boxShadow: '0 4px 30px rgba(0, 255, 255, 0.2)',
                        border: '1px solid rgba(0, 255, 255, 0.3)',
                        mb: 6, // Added more spacing below the code example
                      }}
                    >
                      <pre>
                        <code>
                          {`
          @aiapi.route('/airesponse', methods=['POST'])
          def get_ai_response():
              try:
                  data = request.json
                  prompt = data['text']
                  model_name = data['model']
                  parameters = {
                      "max_tokens": data.get("max_tokens", 2000),
                      "temperature": data.get("temperature", 0.1),
                      "top_p": data.get("top_p", 0.95),
                      "top_k": data.get("top_k", 40),
                  }
                  model_instance = get_model_instance(model_name)
                  response_data = model_instance.generate_response(prompt, parameters)

                  if isinstance(response_data, dict):
                      return jsonify({
                          "message": response_data["text"],
                          "documents": response_data.get("documents", []),
                          "citations": response_data.get("citations", [])
                      })
                  elif isinstance(response_data, str):
                      return jsonify({"message": response_data})
                  else:
                      return jsonify({"message": str(response_data)})
              except KeyError as e:
                  error_message = f"Missing required parameter: {str(e)}"
                  print(error_message)
                  return jsonify({"error": error_message}), 400
              except Exception as e:
                  error_message = f"An error occurred: {str(e)}"
                  print(error_message)
                  return jsonify({"error": error_message}), 500
          `}
                        </code>
                      </pre>
                    </Paper>
                  </Fade>

                  <Fade in timeout={4500}>
                    <Typography
                      variant="h4"
                      align="center"
                      gutterBottom
                      sx={{
                        fontWeight: 'bold',
                        mb: 4,
                        color: '#00ffff',
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                      }}
                    >
                      Implementation Example 2: CommandRModel Class
                    </Typography>
                  </Fade>

                  <Fade in timeout={5000}>
                    <Paper
                      elevation={3}
                      sx={{
                        p: 4,
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '16px',
                        boxShadow: '0 4px 30px rgba(0, 255, 255, 0.2)',
                        border: '1px solid rgba(0, 255, 255, 0.3)',
                        mb: 6, // Added more spacing below the code example
                      }}
                    >
                      <pre>
                        <code>
                          {`
          class CommandRModel(AIModelInterface):
              def __init__(self):
                  self.api_key = os.getenv("COHERE_API_KEY")
                  self.co = cohere.Client(api_key=self.api_key)

              def generate_response(self, prompt, parameters):
                  try:
                      # Assuming 'documents' are optionally passed and managed within 'parameters' if needed.
                      response = self.co.chat(
                          model="command-r",
                          message=prompt,
                          connectors=[{"id": "web-search"}], # Using the web-search connector
                          temperature=parameters.get("temperature", 0.1),
                      )

                      # Checking if the response includes documents and citations and handling accordingly.
                      if hasattr(response, 'documents') and hasattr(response, 'citations'):
                          documents = [{
                              'id': doc['id'],
                              'title': doc.get('title', ''),
                              'text': doc.get('text', ''),
                              'url': doc.get('url', '#')
                          } for doc in response.documents]
                          citations = [{
                              'start': cit['start'],
                              'end': cit['end'],
                              'text': cit['text'],
                              'document_ids': cit['document_ids']
                          } for cit in response.citations]
                          return {
                              'text': response.text,
                              'documents': documents,
                              'citations': citations
                          }
                      # Default response handling if no specific document or citation information is present.
                      return {'text': response.text, 'documents': [], 'citations': []}
                  except Exception as e:
                      print(f"Error in CommandRModel.generate_response: {e}")
                      # Returning a structure indicating an error to ensure the Flask route can handle it gracefully.
                      return {'text': 'An error occurred processing the Command-R model response.', 'documents': [], 'citations': []}
          `}
                        </code>
                      </pre>
                    </Paper>
                  </Fade>

                  <Fade in timeout={5500}>
                    <Typography
                      variant="h4"
                      align="center"
                      gutterBottom
                      sx={{
                        fontWeight: 'bold',
                        mb: 4,
                        color: '#00ffff',
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                      }}
                    >
                      Implementation Example 3: Rendering the Command R Response
                    </Typography>
                  </Fade>

                  <Fade in timeout={6000}>
                    <Paper
                      elevation={3}
                      sx={{
                        p: 4,
                        backgroundColor: 'rgba(0, 0, 0, 0.6)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '16px',
                        boxShadow: '0 4px 30px rgba(0, 255, 255, 0.2)',
                        border: '1px solid rgba(0, 255, 255, 0.3)',
                        mb: 6, // Added more spacing below the code example
                      }}
                    >
                      <pre>
                        <code>
                          {`
          const Message = ({ text, sender, model, documents, citations, onDelete }) => {
            const theme = useTheme();
            const isAssistant = sender === 'ai';

            // Function to render the message text with proper formatting
            const renderMessageText = (text) => {
              // ...
            };

            // Function to render citations (only for Command-R)
            const renderCitations = (citations) => {
              return citations.map((cit, index) => (
                <Typography key={index} variant="caption" sx={{ display: 'block', mt: 1 }}>
                  [{index + 1}] {cit.document_ids.map(id => documents.find(doc => doc.id === id)?.title || "Document").join(", ")}
                </Typography>
              ));
            };

            return (
              <Paper
                sx={{
                  margin: '10px',
                  padding: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : theme.palette.background.paper,
                  alignSelf: isAssistant ? 'flex-start' : 'flex-end',
                }}
              >
                {/* ... */}
                {model === 'Command-R' && citations && renderCitations(citations)}
                {model === 'Command-R' && documents && documents.map((doc, index) => (
                  <Typography key={index} variant="body2" sx={{ mt: 1 }}>
                    <a href={doc.url || "#"} target="_blank" rel="noopener noreferrer">
                      [{index + 1}] {doc.title || "Document"}
                    </a>
                  </Typography>
                ))}
                {/* ... */}
              </Paper>
            );
          };
          `}
                        </code>
                      </pre>
                    </Paper>
                  </Fade>

                  <Fade in timeout={6500}>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        mb: 8,
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                        textShadow: '0 0 10px rgba(0, 255, 255, 0.5)',
                      }}
                    >
                      In summary, the implementation of the LLM Command R with RAG presented several key challenges that required a thoughtful and comprehensive approach. Handling the additional data structures, such as documents and citations, returned by the model, and seamlessly integrating them into the API and frontend components, was a critical aspect of this implementation. Additionally, ensuring robust error handling and maintaining performance and scalability as the complexity of the system grew were essential considerations. By addressing these challenges through modular and extensible architecture, we were able to effectively leverage the power of the RAG feature to deliver accurate and well-grounded responses, while also providing users with the ability to verify the information through inline citations.
                    </Typography>
                  </Fade>



                  <Fade in timeout={7500}>
                  <Typography
                    variant="h4"
                    align="center"
                    gutterBottom
                    sx={{
                      fontWeight: 'bold',
                      mb: 4,
                      color: '#00ffff',
                      animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                    }}
                  >
                    References
                  </Typography>
                </Fade>
                <Fade in timeout={8000}>
                  <Box>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        mb: 2,
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                        textShadow: '0 0 10px rgba(255, 105, 180, 0.5)',
                      }}
                    >
                      <Link href="https://cohere.com/" target="_blank" rel="noopener noreferrer" sx={{ color: '#00ffff' }}>
                        Cohere
                      </Link>
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        mb: 2,
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                        textShadow: '0 0 10px rgba(255, 105, 180, 0.5)',
                      }}
                    >
                      <Link href="https://txt.cohere.com/commonly-asked-questions-about-search-from-coheres-enterprise-customers/" target="_blank" rel="noopener noreferrer" sx={{ color: '#00ffff' }}>
                        Enterprise Search and Retrieval Demystified: A Guide for RAG Users
                      </Link>
                    </Typography>
                    <Typography
                      variant="body1"
                      paragraph
                      sx={{
                        mb: 2,
                        animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                        textShadow: '0 0 10px rgba(255, 105, 180, 0.5)',
                      }}
                    >
                      <Link href="https://docs.cohere.com/docs/command-r" target="_blank" rel="noopener noreferrer" sx={{ color: '#00ffff' }}>
                        Command R
                      </Link>
                    </Typography>
                  </Box>
                </Fade>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    mt: 4,
                  }}
                >
                  <Link
                    href="mailto:john@deepvertical.ai" 
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      color: '#00ffff',
                      textDecoration: 'none',
                      animation: `${neonGlowAnimation} 3s ease-in-out infinite`,
                      '&:hover': {
                        color: '#7fffd4',
                      },
                    }}
                  >
                    Contact us to explore how RAG and/or Command R can transform your business{' '}
                    <Box
                      component="span"
                      sx={{
                        ml: 1,
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                      }}
                    >
                      →
                    </Box>
                  </Link>
                </Box>

                </Box>
              </Box>
          </Box>
        </div>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default ImplementingCommandRWithRAG;