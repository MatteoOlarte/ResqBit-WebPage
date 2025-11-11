import heroImage from "@/assets/Review/image-01.jpg";
import {
	Button,
	Card,
	Field,
	Input,
	LargeTitle,
	makeStyles,
	Rating,
	Subtitle1,
	Subtitle2,
	Text,
	Textarea,
	tokens,
} from "@fluentui/react-components";
import { Send20Regular } from "@fluentui/react-icons";
import Footer from "@Presentation/View/Components/Footer";
import React, { useState } from "react";

interface Review {
	id: number;
	name: string;
	company: string;
	rating: number;
	comment: string;
	date: string;
}

const initialReviews: Review[] = [
	{
		id: 1,
		name: "Carlos Mendoza",
		company: "TechSolutions S.A.S",
		rating: 5,
		comment:
			"ResQBit transformó nuestra gestión de seguridad. La auditoría ISO 27001 fue impecable y el equipo demostró un profesionalismo excepcional. Altamente recomendados.",
		date: "2024-11-05",
	},
	{
		id: 2,
		name: "María González",
		company: "Innovatech Ltda",
		rating: 5,
		comment:
			"Excelente servicio de Business Intelligence. Los dashboards en Power BI nos permitieron tomar decisiones más informadas. El acompañamiento fue continuo y profesional.",
		date: "2024-10-28",
	},
	{
		id: 3,
		name: "Jorge Ramírez",
		company: "DataCorp Solutions",
		rating: 4,
		comment:
			"La implementación del SIEM y las pruebas de penetración superaron nuestras expectativas. El equipo es muy competente y responde rápidamente.",
		date: "2024-10-15",
	},
	{
		id: 4,
		name: "Ana Patricia Ruiz",
		company: "CloudServices Co.",
		rating: 5,
		comment:
			"Certificación ISO 9001 lograda gracias al acompañamiento de ResQBit. Su metodología es clara y efectiva. Totalmente satisfechos con el resultado.",
		date: "2024-09-22",
	},
	{
		id: 5,
		name: "Luis Fernando Castro",
		company: "SecureNet Ltda",
		rating: 5,
		comment:
			"Auditoría de ciberseguridad muy completa. Identificaron vulnerabilidades que desconocíamos y nos ayudaron a implementar las mejores prácticas de seguridad.",
		date: "2024-09-10",
	},
	{
		id: 6,
		name: "Patricia Morales",
		company: "Consulting Group S.A.S",
		rating: 4,
		comment:
			"Gran experiencia con la consultoría digital. El equipo de ResQBit nos ayudó a optimizar nuestros procesos de manera sostenible y eficiente.",
		date: "2024-08-18",
	},
];

function Reviews(): React.JSX.Element {
	const classes = useStyles();

	// Load user reviews from localStorage
	const loadUserReviews = (): Review[] => {
		try {
			const saved = localStorage.getItem("userReviews");
			return saved ? JSON.parse(saved) : [];
		} catch (error) {
			console.error("Error loading reviews:", error);
			return [];
		}
	};

	const [userReviews, setUserReviews] = useState<Review[]>(loadUserReviews());
	// Combine user reviews first, then predefined reviews
	const allReviews = [...userReviews, ...initialReviews];

	const [formData, setFormData] = useState({
		name: "",
		company: "",
		rating: 0,
		comment: "",
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Create new review
		const newReview: Review = {
			id: Date.now(), // Use timestamp as unique ID
			name: formData.name,
			company: formData.company,
			rating: formData.rating,
			comment: formData.comment,
			date: new Date().toISOString().split("T")[0], // Current date in YYYY-MM-DD format
		};

		// Update user reviews
		const updatedUserReviews = [newReview, ...userReviews];
		setUserReviews(updatedUserReviews);

		// Save to localStorage
		try {
			localStorage.setItem("userReviews", JSON.stringify(updatedUserReviews));
		} catch (error) {
			console.error("Error saving review:", error);
		}

		// Reset form
		setFormData({
			name: "",
			company: "",
			rating: 0,
			comment: "",
		});

		alert("¡Gracias por tu reseña! Ha sido publicada exitosamente.");
	};

	const handleInputChange = (field: string, value: string | number) => {
		setFormData((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	// Calculate average rating
	const averageRating =
		allReviews.length > 0 ? allReviews.reduce((acc, r) => acc + r.rating, 0) / allReviews.length : 0;

	return (
		<div
			style={{
				display: "grid",
				gridTemplateRows: "1fr auto",
				minHeight: "100vh",
			}}
		>
			<main>
				{/* Hero Section */}
				<section className={classes.heroWrapper}>
					<div className="container">
						<div className={classes.heroGrid}>
							<div className={classes.heroContent}>
								<LargeTitle as="h1" block>
									Reseñas de Nuestros Clientes
								</LargeTitle>
								<Text as="p" size={500} className={classes.heroSubtitle}>
									Conoce las experiencias de las empresas que han confiado en ResQBit para transformar su seguridad,
									calidad y eficiencia operativa.
								</Text>

								<div className={classes.ratingStats}>
									<div className={classes.averageRating}>
										<Text size={900} weight="bold" className={classes.ratingNumber}>
											{averageRating.toFixed(1)}
										</Text>
										<Rating value={Math.round(averageRating)} max={5} size="large" />
										<Text size={300} className={classes.ratingCount}>
											Basado en {allReviews.length} reseñas
										</Text>
									</div>
								</div>
							</div>

							<div className={classes.heroImageWrapper}>
								<img src={heroImage} alt="Clientes satisfechos" className={classes.heroImage} />
							</div>
						</div>
					</div>
				</section>

				{/* Main Content: Reviews List + Form */}
				<section className="container mb-5">
					<div className={classes.mainGrid}>
						{/* Left: Reviews List */}
						<div className={classes.reviewsSection}>
							<div className="mb-4">
								<Subtitle1 as="h2" block className="mb-2">
									Lo que dicen nuestros clientes
								</Subtitle1>
								<Text as="p" size={400}>
									Testimonios reales de empresas que han mejorado su seguridad y calidad con nuestros servicios.
								</Text>
							</div>

							<div className={classes.reviewsList}>
								{allReviews.map((review) => (
									<ReviewCard key={review.id} review={review} />
								))}
							</div>
						</div>

						{/* Right: Review Form */}
						<div className={classes.formSection}>
							<div className={classes.formHeader}>
								<Subtitle1 as="h2" block className="mb-2">
									Comparte tu experiencia
								</Subtitle1>
								<Text as="p" size={400}>
									Tu opinión es muy importante para nosotros y ayuda a otras empresas a conocer nuestros servicios.
								</Text>
							</div>

							<Card appearance="outline" className={classes.formCard}>
								<form onSubmit={handleSubmit}>
									<Field label="Nombre completo" required className="mb-3">
										<Input
											value={formData.name}
											onChange={(e) => handleInputChange("name", e.target.value)}
											placeholder="Ej: Juan Pérez"
											required
										/>
									</Field>

									<Field label="Empresa" required className="mb-3">
										<Input
											value={formData.company}
											onChange={(e) => handleInputChange("company", e.target.value)}
											placeholder="Ej: Mi Empresa S.A.S"
											required
										/>
									</Field>

									<Field label="Calificación" required className={classes.ratingField}>
										<Rating
											value={formData.rating}
											onChange={(_, data) => handleInputChange("rating", data.value)}
											max={5}
											size="large"
										/>
										<Text size={200} className={classes.ratingHint}>
											{formData.rating === 0 ? "Selecciona una calificación" : `${formData.rating} de 5 estrellas`}
										</Text>
									</Field>

									<Field label="Tu comentario" required className="mb-3">
										<Textarea
											value={formData.comment}
											onChange={(e) => handleInputChange("comment", e.target.value)}
											placeholder="Cuéntanos sobre tu experiencia con nuestros servicios..."
											rows={6}
											resize="vertical"
											required
										/>
									</Field>

									<div className={classes.formActions}>
										<Button
											appearance="primary"
											type="submit"
											size="large"
											icon={<Send20Regular />}
											disabled={!formData.name || !formData.company || formData.rating === 0 || !formData.comment}
										>
											Enviar Reseña
										</Button>
									</div>
								</form>
							</Card>
						</div>
					</div>
				</section>
			</main>

			<Footer />
		</div>
	);
}

interface ReviewCardProps {
	review: Review;
}

// Array of background colors for avatars
const avatarColors = [
	tokens.colorPaletteRedBackground3,
	tokens.colorPaletteGreenBackground3,
	tokens.colorPaletteSteelForeground2,
	tokens.colorPalettePurpleForeground2,
	tokens.colorPaletteMagentaForeground2,
];

// Function to get a consistent color based on the name
const getAvatarColor = (name: string): string => {
	const hash = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
	return avatarColors[hash % avatarColors.length];
};

function ReviewCard({ review }: ReviewCardProps) {
	const classes = useStyles();
	const avatarColor = getAvatarColor(review.name);

	return (
		<Card appearance="outline" className={classes.reviewCard}>
			<div className={classes.reviewHeader}>
				<div className={classes.reviewAuthor}>
					<div className={classes.avatarPlaceholder} style={{ backgroundColor: avatarColor }}>
						{review.name
							.split(" ")
							.map((n) => n[0])
							.join("")
							.substring(0, 2)}
					</div>
					<div>
						<Subtitle2 as="h3" className="mb-0">
							{review.name}
						</Subtitle2>
						<Text size={200} className={classes.companyText}>
							{review.company}
						</Text>
					</div>
				</div>
				<div className={classes.reviewRating}>
					<Rating value={review.rating} max={5} size="small" />
				</div>
			</div>

			<Text as="p" size={300} className={classes.reviewComment}>
				"{review.comment}"
			</Text>

			<div className={classes.reviewFooter}>
				<Text size={200} className={classes.reviewDate}>
					{new Date(review.date).toLocaleDateString("es-ES", {
						year: "numeric",
						month: "long",
						day: "numeric",
					})}
				</Text>
			</div>
		</Card>
	);
}

const useStyles = makeStyles({
	heroWrapper: {
		background: tokens.colorNeutralBackground2,
		padding: "4rem 2rem",
		marginBottom: "3rem",
	},
	heroGrid: {
		display: "grid",
		gridTemplateColumns: "1fr 1fr",
		gap: "3rem",
		alignItems: "center",
		"@media (max-width: 992px)": {
			gridTemplateColumns: "1fr",
			gap: "2rem",
		},
	},
	heroContent: {
		display: "flex",
		flexDirection: "column",
	},
	heroImageWrapper: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		"@media (max-width: 992px)": {
			order: -1,
		},
	},
	heroImage: {
		width: "100%",
		height: "auto",
		maxWidth: "500px",
		borderRadius: tokens.borderRadiusXLarge,
		boxShadow: tokens.shadow16,
		objectFit: "cover",
	},
	heroSubtitle: {
		color: tokens.colorNeutralForeground2,
		marginTop: "1rem",
		marginBottom: "2rem",
	},
	ratingStats: {
		display: "flex",
		justifyContent: "flex-start",
		marginTop: "2rem",
	},
	averageRating: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		gap: "0.5rem",
		padding: "2rem",
		backgroundColor: tokens.colorNeutralBackground1,
		borderRadius: tokens.borderRadiusLarge,
		boxShadow: tokens.shadow8,
	},
	ratingNumber: {
		fontSize: "3rem",
		color: tokens.colorBrandBackground,
		lineHeight: 1,
	},
	ratingCount: {
		color: tokens.colorNeutralForeground3,
	},
	mainGrid: {
		display: "grid",
		gridTemplateColumns: "1fr 450px",
		gap: "2rem",
		alignItems: "start",
		"@media (max-width: 992px)": {
			gridTemplateColumns: "1fr",
		},
	},
	reviewsSection: {
		display: "flex",
		flexDirection: "column",
	},
	reviewsList: {
		display: "flex",
		flexDirection: "column",
		gap: "1rem",
	},
	reviewCard: {
		padding: "1.5rem",
		display: "flex",
		flexDirection: "column",
		transition: "transform 0.2s ease, box-shadow 0.2s ease",
		"&:hover": {
			transform: "translateX(4px)",
			boxShadow: tokens.shadow16,
		},
	},
	reviewHeader: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "flex-start",
		marginBottom: "1rem",
		gap: "1rem",
	},
	reviewAuthor: {
		display: "flex",
		alignItems: "center",
		gap: "0.75rem",
		flex: 1,
	},
	avatarPlaceholder: {
		width: "48px",
		height: "48px",
		borderRadius: "50%",
		color: tokens.colorNeutralForegroundInverted,
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		fontSize: "1rem",
		fontWeight: 600,
		flexShrink: 0,
	},
	companyText: {
		color: tokens.colorNeutralForeground3,
	},
	reviewRating: {
		flexShrink: 0,
	},
	reviewComment: {
		color: tokens.colorNeutralForeground2,
		lineHeight: 1.6,
		fontStyle: "italic",
		marginBottom: "1rem",
		flex: 1,
	},
	reviewFooter: {
		paddingTop: "0.75rem",
		borderTop: `1px solid ${tokens.colorNeutralStroke2}`,
	},
	reviewDate: {
		color: tokens.colorNeutralForeground3,
	},
	formSection: {
		position: "sticky",
		top: "100px",
		"@media (max-width: 992px)": {
			position: "static",
		},
	},
	formHeader: {
		marginBottom: "1.5rem",
	},
	formCard: {
		padding: "1.5rem",
	},
	ratingField: {
		marginBottom: "1rem",
	},
	ratingHint: {
		color: tokens.colorNeutralForeground3,
		marginTop: "0.5rem",
		display: "block",
	},
	formActions: {
		display: "flex",
		justifyContent: "flex-end",
		marginTop: "1.5rem",
	},
});

export default Reviews;
