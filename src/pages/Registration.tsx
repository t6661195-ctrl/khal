import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { CalendarIcon, Upload, Shield, UserCheck, Camera } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const registrationSchema = z.object({
  fullName: z.string().min(2, "Vollständiger Name ist erforderlich"),
  email: z.string().email("Ungültige E-Mail-Adresse"),
  mobileNumber: z.string().min(10, "Handynummer ist erforderlich"),
  landlineNumber: z.string().optional(),
  birthDate: z.string().min(1, "Geburtsdatum ist erforderlich"),
  street: z.string().min(2, "Straßenname ist erforderlich"),
  streetNumber: z.string().min(1, "Hausnummer ist erforderlich"),
  postalCode: z.string().min(5, "Postleitzahl ist erforderlich"),
  websiteToCheck: z.string().url("Gültige Website-URL erforderlich"),
  selfieFile: z.any().optional(),
  agreeTerms: z.boolean().refine((val) => val === true, "Sie müssen den Bedingungen zustimmen"),
});

type RegistrationForm = z.infer<typeof registrationSchema>;

const Registration = () => {
  const [selfiePreview, setSelfiePreview] = useState<string | null>(null);
  const { toast } = useToast();

  const form = useForm<RegistrationForm>({
    resolver: zodResolver(registrationSchema),
    defaultValues: {
      fullName: "",
      email: "",
      mobileNumber: "",
      landlineNumber: "",
      birthDate: "",
      street: "",
      streetNumber: "",
      postalCode: "",
      websiteToCheck: "",
      agreeTerms: false,
    },
  });

  const calculateAge = (birthDate: string) => {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  };

  const handleSelfieUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setSelfiePreview(e.target?.result as string);
        };
        reader.readAsDataURL(file);
        form.setValue("selfieFile", file);
      } else {
        toast({
          title: "Ungültiger Dateityp",
          description: "Bitte wählen Sie eine Bilddatei aus.",
          variant: "destructive",
        });
      }
    }
  };

  const onSubmit = (data: RegistrationForm) => {
    const age = calculateAge(data.birthDate);
    
    if (age < 18) {
      toast({
        title: "Alter nicht ausreichend",
        description: "Sie müssen mindestens 18 Jahre alt sein, um sich zu registrieren.",
        variant: "destructive",
      });
      return;
    }

    if (!selfiePreview) {
      toast({
        title: "Selfie erforderlich",
        description: "Bitte laden Sie ein Selfie zur Identitätsverifikation hoch.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Registrierung erfolgreich",
      description: "Ihr Konto wurde erfolgreich erstellt. Sie erhalten eine Bestätigungs-E-Mail.",
    });

    console.log("Registration data:", data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-primary/5 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <Shield className="h-12 w-12 text-primary mr-3" />
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Registrierung
            </h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Erstellen Sie Ihr Konto für professionelle Cybersicherheitsdienste. 
            Bitte füllen Sie das Formular vollständig aus und laden Sie ein klares Selfie hoch.
          </p>
        </div>

        <Card className="shadow-cyber border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center text-2xl">
              <UserCheck className="h-6 w-6 mr-2 text-primary" />
              Neues Konto erstellen
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Vollständiger Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="Max Mustermann" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-Mail-Adresse *</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="max@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="mobileNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Handynummer *</FormLabel>
                        <FormControl>
                          <Input placeholder="+49 123 456 7890" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="landlineNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Festnetznummer</FormLabel>
                        <FormControl>
                          <Input placeholder="+49 30 123 456" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="birthDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Geburtsdatum * (Mindestalter: 18 Jahre)</FormLabel>
                        <FormControl>
                          <Input type="date" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="postalCode"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Postleitzahl *</FormLabel>
                        <FormControl>
                          <Input placeholder="10115" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="street"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Straße *</FormLabel>
                        <FormControl>
                          <Input placeholder="Musterstraße" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="streetNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Hausnummer *</FormLabel>
                        <FormControl>
                          <Input placeholder="123a" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="websiteToCheck"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Website für Sicherheitsprüfung *</FormLabel>
                      <FormControl>
                        <Input placeholder="https://www.example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="space-y-4">
                  <Label className="text-base font-semibold">Selfie für Identitätsverifikation *</Label>
                  <div className="border-2 border-dashed border-primary/30 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleSelfieUpload}
                      className="hidden"
                      id="selfie-upload"
                    />
                    <label htmlFor="selfie-upload" className="cursor-pointer">
                      {selfiePreview ? (
                        <div className="space-y-4">
                          <img
                            src={selfiePreview}
                            alt="Selfie Vorschau"
                            className="mx-auto h-32 w-32 object-cover rounded-full border-4 border-primary/20"
                          />
                          <p className="text-success">Selfie hochgeladen</p>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <Camera className="mx-auto h-12 w-12 text-muted-foreground" />
                          <div>
                            <p className="text-lg font-medium">Selfie hochladen</p>
                            <p className="text-sm text-muted-foreground">
                              Klicken Sie hier, um ein Foto aufzunehmen oder auszuwählen
                            </p>
                          </div>
                        </div>
                      )}
                    </label>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Selfie-Anforderungen:</h4>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Vollständiges, unverdecktes Gesicht</li>
                      <li>• Gute Beleuchtung und neutraler Hintergrund</li>
                      <li>• Keine Filter oder Bearbeitungen</li>
                      <li>• Nur für Identitätsverifikation und Kontosicherheit verwendet</li>
                    </ul>
                  </div>
                </div>

                <FormField
                  control={form.control}
                  name="agreeTerms"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel>
                          Ich bestätige, dass ich über 18 Jahre alt bin und stimme den{" "}
                          <span className="text-primary cursor-pointer hover:underline">
                            Allgemeinen Geschäftsbedingungen
                          </span>{" "}
                          und der{" "}
                          <span className="text-primary cursor-pointer hover:underline">
                            Datenschutzerklärung
                          </span>{" "}
                          zu. *
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  className="w-full h-12 text-lg"
                  variant="hero"
                >
                  <UserCheck className="mr-2 h-5 w-5" />
                  Konto erstellen
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Ihre Daten werden sicher verschlüsselt und gemäß DSGVO-Bestimmungen verarbeitet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;