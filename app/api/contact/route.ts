import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tous les champs obligatoires doivent être remplis.' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Adresse email invalide.' },
        { status: 400 }
      )
    }

    // Sauvegarde dans la base de données
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        subject: subject || null,
        message,
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Message envoyé avec succès !',
        contactId: contact.id,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Erreur lors de l\'enregistrement du message:', error)
    return NextResponse.json(
      { error: 'Une erreur est survenue lors de l\'envoi du message.' },
      { status: 500 }
    )
  }
}

// GET pour récupérer les messages (optionnel - pour un panneau admin)
export async function GET() {
  try {
    const contacts = await prisma.contact.findMany({
      orderBy: {
        createdAt: 'desc',
      },
      take: 50, // Limiter à 50 messages récents
    })

    return NextResponse.json({ contacts }, { status: 200 })
  } catch (error) {
    console.error('Erreur lors de la récupération des messages:', error)
    return NextResponse.json(
      { error: 'Erreur lors de la récupération des messages.' },
      { status: 500 }
    )
  }
}
